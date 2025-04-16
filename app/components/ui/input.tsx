import * as React from "react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      className="border border-gray-300 px-3 py-2 rounded w-full"
      ref={ref}
      {...props}
    />
  )
)

Input.displayName = "Input"
export { Input }