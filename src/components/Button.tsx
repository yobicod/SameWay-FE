import clsx from 'clsx'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
// type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: JSX.Element
  endIcon?: JSX.Element
}
const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, startIcon, endIcon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={twMerge(
          clsx({
            'rounded flex gap-2 justify-between items-center bg-secondary w-full py-2 px-4 text-white hover:opacity-[0.85]':
              true,
          }),
          className
        )}>
        {startIcon}
        {children}
        {endIcon}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
