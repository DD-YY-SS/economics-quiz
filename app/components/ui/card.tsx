import * as React from "react"

function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="border rounded shadow-sm p-4" {...props} />
}

function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="space-y-4" {...props} />
}

export { Card, CardContent }