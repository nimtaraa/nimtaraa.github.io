'use client'

import { useEffect, useRef, useCallback } from 'react'

interface Branch {
  x: number
  y: number
  angle: number
  length: number
  depth: number
  maxLength: number
  currentLength: number
  children: Branch[]
  swayOffset: number
  swaySpeed: number
  growing: boolean
  grown: boolean
}

function createBranch(
  x: number,
  y: number,
  angle: number,
  length: number,
  depth: number
): Branch {
  return {
    x,
    y,
    angle,
    length,
    maxLength: length,
    currentLength: 0,
    depth,
    children: [],
    swayOffset: Math.random() * Math.PI * 2,
    swaySpeed: 0.3 + Math.random() * 0.4,
    growing: depth === 0,
    grown: false,
  }
}

function getEndPoint(branch: Branch, time: number) {
  const swayAmount = branch.depth * 0.006
  const sway = Math.sin(time * branch.swaySpeed + branch.swayOffset) * swayAmount
  const angle = branch.angle + sway
  const len = branch.currentLength

  return {
    x: branch.x + Math.sin(angle) * len,
    y: branch.y - Math.cos(angle) * len,
  }
}

export default function PhysicsTree() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animFrameRef = useRef<number>(0)
  const treeRef = useRef<Branch | null>(null)

  const buildTree = useCallback((width: number, height: number) => {
    const trunkLength = height * 0.26
    const root = createBranch(width / 2, height, 0, trunkLength, 0)
    root.growing = true

    function addChildren(parent: Branch, depth: number, maxDepth: number) {
      if (depth >= maxDepth) return

      const numBranches = depth < 2 ? 2 : (Math.random() > 0.35 ? 2 : 3)
      const spreadBase = 0.45 + Math.random() * 0.3
      const lengthRatio = 0.65 + Math.random() * 0.12

      for (let i = 0; i < numBranches; i++) {
        const angleOffset =
          numBranches === 2
            ? (i === 0 ? -spreadBase : spreadBase)
            : (i - 1) * spreadBase

        const childAngle = parent.angle + angleOffset + (Math.random() - 0.5) * 0.12
        const childLength = parent.length * lengthRatio
        const child = createBranch(0, 0, childAngle, childLength, depth + 1)
        parent.children.push(child)
        addChildren(child, depth + 1, maxDepth)
      }
    }

    addChildren(root, 0, 7)
    return root
  }, [])

  const draw = useCallback((ctx: CanvasRenderingContext2D, branch: Branch, time: number) => {
    if (branch.currentLength < 0.5) return

    const end = getEndPoint(branch, time)
    const maxLineWidth = 2.5
    const lineWidth = Math.max(0.25, maxLineWidth - branch.depth * 0.3)
    const alpha = Math.max(0.12, 0.7 - branch.depth * 0.08)

    ctx.beginPath()
    ctx.moveTo(branch.x, branch.y)
    ctx.lineTo(end.x, end.y)
    ctx.strokeStyle = `rgba(100, 255, 218, ${alpha})`
    ctx.lineWidth = lineWidth
    ctx.lineCap = 'round'
    ctx.stroke()

    // Soft glow on trunk + main branches only
    if (branch.depth < 2) {
      ctx.beginPath()
      ctx.moveTo(branch.x, branch.y)
      ctx.lineTo(end.x, end.y)
      ctx.strokeStyle = `rgba(100, 255, 218, ${alpha * 0.1})`
      ctx.lineWidth = lineWidth + 3
      ctx.lineCap = 'round'
      ctx.stroke()
    }

    // Tiny dots at tips
    if (branch.children.length === 0 && branch.grown) {
      const dotAlpha = 0.2 + Math.sin(time * 1.2 + branch.swayOffset) * 0.1
      ctx.beginPath()
      ctx.arc(end.x, end.y, 1.2, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(100, 255, 218, ${dotAlpha})`
      ctx.fill()
    }

    for (const child of branch.children) {
      child.x = end.x
      child.y = end.y
      draw(ctx, child, time)
    }
  }, [])

  const growTree = useCallback((branch: Branch, deltaGrowth: number): boolean => {
    let stillGrowing = false

    if (branch.growing && !branch.grown) {
      branch.currentLength += branch.maxLength * deltaGrowth
      if (branch.currentLength >= branch.maxLength) {
        branch.currentLength = branch.maxLength
        branch.grown = true
        for (const child of branch.children) {
          child.growing = true
        }
      }
      stillGrowing = true
    }

    for (const child of branch.children) {
      if (growTree(child, deltaGrowth)) {
        stillGrowing = true
      }
    }

    return stillGrowing
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      treeRef.current = buildTree(rect.width, rect.height)

      if (prefersReducedMotion && treeRef.current) {
        const growAll = (b: Branch) => {
          b.currentLength = b.maxLength
          b.grown = true
          b.growing = true
          for (const c of b.children) growAll(c)
        }
        growAll(treeRef.current)
      }
    }

    resize()
    window.addEventListener('resize', resize)

    const growthRate = 1 / (3500 / 16)

    const animate = (now: number) => {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      const time = now / 1000

      if (treeRef.current) {
        if (!prefersReducedMotion) {
          growTree(treeRef.current, growthRate)
        }
        draw(ctx, treeRef.current, time)
      }

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animFrameRef.current)
    }
  }, [buildTree, draw, growTree])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block' }}
      aria-hidden="true"
    />
  )
}
