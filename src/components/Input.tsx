import clsx from 'clsx'
import { UseFormRegisterReturn } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  btnClassName?: string
  register?: UseFormRegisterReturn | null
}

export default function Input({
  btnClassName,
  register,
  value,
  placeholder,
  disabled,
  ...props
}: Props) {
  return (
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
          'pointer-events-none': disabled,
        }),
        btnClassName
      )}
    />
  )
}
