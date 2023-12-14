import clsx from 'clsx'
import { MaterialIcon } from 'material-icons'
import { twMerge } from 'tailwind-merge'

type IconStyle = 'default' | 'outlined' | 'rounded' | 'sharp' | 'twoTone'
interface IProps {
  name: MaterialIcon
  className?: string
  iconStyle?: IconStyle
}

export default function Icon({
  name,
  className,
  iconStyle = 'default',
}: IProps) {
  const iconClassName = twMerge(
    clsx({
      'cursor-default text-sm': true,
      'material-icons': iconStyle === 'default',
      'material-icons-outlined': iconStyle === 'outlined',
      'material-icons-round': iconStyle === 'rounded',
      'material-icons-sharp': iconStyle === 'sharp',
      'material-icons-two-tone': iconStyle === 'twoTone',
    }),
    className
  )
  return <span className={iconClassName}>{name}</span>
}
