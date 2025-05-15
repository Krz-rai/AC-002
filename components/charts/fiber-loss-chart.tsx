"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

interface FiberLossChartProps {
  productId: string
}

export default function EnhancedFiberLossChart({ productId }: FiberLossChartProps) {
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
      type: "line",
      data: {
        labels: ["0", "5", "10", "15", "20"],
        datasets: [
          {
            label: "Fiber Loss (mg)",
            data: [0, 120, 150, 160, 165],
            borderColor: "rgb(59, 130, 246)",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            tension: 0.4,
            fill: true,
            borderWidth: 3,
          },
          {
            label: "Industry Standard",
            data: [0, 80, 90, 95, 100],
            borderColor: "rgba(107, 114, 128, 0.7)",
            backgroundColor: "rgba(107, 114, 128, 0.05)",
            borderDash: [5, 5],
            tension: 0.4,
            fill: false,
            borderWidth: 2,
          }
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              usePointStyle: true,
              padding: 15,
            }
          },
          tooltip: {
            mode: "index",
            intersect: false,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            titleColor: "#111827",
            bodyColor: "#374151",
            borderColor: "#E5E7EB",
            borderWidth: 1,
            padding: 10,
            displayColors: true,
            callbacks: {
              label: function(context) {
                return ` ${context.dataset.label}: ${context.parsed.y} mg`;
              }
            }
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Hours of washes",
              padding: {top: 10, bottom: 0},
              font: {
                size: 12,
                weight: '500',
              }
            },
            grid: {
              display: false,
            },
            ticks: {
              padding: 8,
            }
          },
          y: {
            min: 0,
            max: 200,
            title: {
              display: true,
              text: 'Fiber loss (mg)',
              padding: {bottom: 10},
              font: {
                size: 12,
                weight: '500',
              }
            },
            grid: {
              color: "rgba(0, 0, 0, 0.05)",
              drawBorder: false,
            },
            ticks: {
              padding: 8,
            }
          },
        },
        elements: {
          point: {
            radius: 4,
            hoverRadius: 6,
          },
          line: {
            tension: 0.4,
          }
        },
        interaction: {
          mode: 'index',
          intersect: false,
        },
        animation: {
          duration: 1000,
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
    <div className="w-full h-full"> {/* Changed from h-64 to h-full */}
      <canvas ref={chartRef}></canvas>
    </div>
  )
}
