import clsx from 'clsx'
import { UseFormRegisterReturn } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  btnClassName?: string
  register?: UseFormRegisterReturn | null
  startIcon?: JSX.Element
  endIcon?: JSX.Element
}

export default function Input({
  btnClassName,
  register,
  value,
  placeholder,
  disabled,
  startIcon,
  endIcon,
  ...props
}: Props) {
  return (
    <div className='relative'>
      {startIcon && (
        <div className='absolute left-2 top-[10px] flex items-center'>
          {startIcon}
        </div>
      )}
      <input
        {...props}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        {...register}
        className={twMerge(
          clsx({
            'h-11 w-full border rounded border-stroke px-4 py-2 text-secondary':
              true,
            'pl-9': startIcon,
            'pr-9': endIcon,
            'pointer-events-none': disabled,
          }),
          btnClassName
        )}
      />
      {endIcon && (
        <div className='absolute right-2 top-[10px] flex items-center'>
          {endIcon}
        </div>
      )}
    </div>
  )
}
