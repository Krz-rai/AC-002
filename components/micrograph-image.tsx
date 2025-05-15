"use client"

import { useEffect, useRef } from "react"

interface MicrographImageProps {
  productId: string
}

export default function MicrographImage({ productId }: MicrographImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with higher resolution for better detail
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()

    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr

    ctx.scale(dpr, dpr)

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height)

    // Set background
    ctx.fillStyle = "#f1f1f1"
    ctx.fillRect(0, 0, rect.width, rect.height)

    // Draw fabric texture based on product ID
    drawFabricTexture(ctx, rect.width, rect.height, productId)
  }, [productId])

  // Function to draw realistic fabric texture
  const drawFabricTexture = (ctx: CanvasRenderingContext2D, width: number, height: number, productId: string) => {
    // Different fiber patterns based on product type
    const isFleece = productId.includes("covert") || productId.includes("delta")
    const isWaterproof = productId.includes("beta") || productId.includes("alpha")

    // Base fiber colors
    const fiberColors = isFleece
      ? ["#d1d5db", "#9ca3af", "#6b7280", "#4b5563"]
      : isWaterproof
        ? ["#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6"]
        : ["#e5e7eb", "#d1d5db", "#9ca3af", "#6b7280"]

    // Draw base texture
    for (let i = 0; i < 2000; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const fiberLength = Math.random() * 15 + 5
      const fiberWidth = Math.random() * 1.5 + 0.5
      const angle = Math.random() * Math.PI * 2

      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(angle)

      // Select random fiber color
      ctx.strokeStyle = fiberColors[Math.floor(Math.random() * fiberColors.length)]
      ctx.lineWidth = fiberWidth
      ctx.lineCap = "round"

      // Draw fiber
      ctx.beginPath()
      ctx.moveTo(0, 0)

      // Add slight curve to fibers
      const curve = (Math.random() - 0.5) * 5
      const controlX = fiberLength / 2
      const controlY = curve

      ctx.quadraticCurveTo(controlX, controlY, fiberLength, 0)
      ctx.stroke()

      ctx.restore()
    }

    // Add highlights and shadows for depth
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const size = Math.random() * 3 + 1

      ctx.fillStyle = Math.random() > 0.5 ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)"

      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fill()
    }

    // Add specific fabric characteristics
    if (isFleece) {
      // Add fuzzy texture for fleece
      for (let i = 0; i < 500; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        const size = Math.random() * 2 + 0.5

        ctx.fillStyle = "rgba(255, 255, 255, 0.15)"
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }
    } else if (isWaterproof) {
      // Add membrane-like structure for waterproof fabrics
      ctx.strokeStyle = "rgba(59, 130, 246, 0.2)"
      ctx.lineWidth = 0.5

      for (let i = 0; i < 30; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        const size = Math.random() * 30 + 20

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.stroke()
      }
    }

    // Add scale indicator
    ctx.fillStyle = "#000"
    ctx.font = "10px Arial"
    ctx.fillText("50μm", width - 50, height - 10)

    // Add measurement line
    ctx.beginPath()
    ctx.moveTo(width - 50, height - 15)
    ctx.lineTo(width - 10, height - 15)
    ctx.strokeStyle = "#000"
    ctx.lineWidth = 1
    ctx.stroke()
  }

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full rounded-md" style={{ width: "100%", height: "100%" }} />
      <div className="absolute bottom-2 left-2 bg-white bg-opacity-70 px-2 py-1 text-xs rounded">
        Microscopic view • 200x magnification
      </div>
    </div>
  )
}
