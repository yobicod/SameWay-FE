import clsx from 'clsx'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={twMerge(
          clsx({
            'rounded bg-secondary w-full py-2 px-4 text-white': true,
          }),
          className
        )}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
