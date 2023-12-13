import clsx from 'clsx'
import { UseFormRegisterReturn } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  btnClassName?: string
  register?: UseFormRegisterReturn | null
//   icon: string
}

export default function Input({
  btnClassName,
  register,
  value,
  placeholder,
  disabled,
//   icon,
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
          'h-11 w-full border rounded-2xl border-stroke border-white px-4 py-2':
            true,
          'pointer-events-none': disabled
        }),
        btnClassName
      )}
    >
      
        {/* <Image src="/image/pin-green" width={70} height={37} alt="app-logo" /> */}
      
    </input>
  )
}
