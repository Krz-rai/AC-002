"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

interface FiberLossChartProps {
  productId: string
}

export default function FiberLossChart({ productId }: FiberLossChartProps) {
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
            pointRadius: 5,
            pointBackgroundColor: "white",
            pointBorderColor: "rgb(59, 130, 246)",
            pointBorderWidth: 2,
          },
          {
            label: "Industry Average",
            data: [0, 140, 160, 170, 180],
            borderColor: "rgba(209, 213, 219, 0.8)",
            borderDash: [5, 5],
            backgroundColor: "transparent",
            tension: 0.4,
            fill: false,
            pointRadius: 0,
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
              padding: 20,
              font: {
                size: 12
              }
            }
          },
          tooltip: {
            mode: "index",
            intersect: false,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            titleColor: "#000",
            bodyColor: "#000",
            borderColor: "rgba(0, 0, 0, 0.1)",
            borderWidth: 1,
            padding: 10,
            displayColors: true,
            callbacks: {
              label: function(context) {
                return `${context.dataset.label}: ${context.parsed.y} mg`;
              }
            }
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Hours of washes",
              font: {
                size: 14,
                weight: 'bold'
              },
              padding: {top: 10, bottom: 0}
            },
            grid: {
              display: false,
            },
            ticks: {
              padding: 10,
            }
          },
          y: {
            min: 0,
            max: 200,
            title: {
              display: true,
              text: "Fiber Loss (mg)",
              font: {
                size: 14,
                weight: 'bold'
              },
              padding: {bottom: 10}
            },
            grid: {
              color: "rgba(0, 0, 0, 0.05)",
            },
            ticks: {
              padding: 10,
              stepSize: 50
            }
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
    <div className="w-full h-full">
      <canvas ref={chartRef}></canvas>
    </div>
  )
}
