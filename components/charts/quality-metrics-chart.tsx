"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

interface QualityMetricsChartProps {
  productId: string
}

export default function QualityMetricsChart({ productId }: QualityMetricsChartProps) {
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
      type: "bar",
      data: {
        labels: ["Pilling", "Abrasion", "Tensile strength"],
        datasets: [
          {
            label: "Score",
            data: [75, 85, 90],
            backgroundColor: ["rgba(229, 231, 235, 0.8)", "rgba(229, 231, 235, 0.8)", "rgba(229, 231, 235, 0.8)"],
            borderColor: ["rgba(209, 213, 219, 1)", "rgba(209, 213, 219, 1)", "rgba(209, 213, 219, 1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            grid: {
              display: false,
            },
          },
          x: {
            grid: {
              display: false,
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
