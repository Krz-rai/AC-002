"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

interface CompositionChartProps {
  productId: string
}

export default function CompositionChart({ productId }: CompositionChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    // Create the chart
    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Polyester", "Wool", "Nylon", "Other"],
        datasets: [
          {
            data: [100, 0, 0, 0],
            backgroundColor: [
              "rgba(75, 112, 146, 0.8)",
              "rgba(124, 156, 191, 0.8)",
              "rgba(164, 186, 212, 0.8)",
              "rgba(211, 222, 235, 0.8)",
            ],
            borderColor: [
              "rgba(75, 112, 146, 1)",
              "rgba(124, 156, 191, 1)",
              "rgba(164, 186, 212, 1)",
              "rgba(211, 222, 235, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
            labels: {
              boxWidth: 15,
              padding: 15,
              font: {
                size: 12,
              },
            },
          },
        },
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [productId])

  return (
    <div className="w-full h-64">
      <canvas ref={chartRef}></canvas>
    </div>
  )
}
