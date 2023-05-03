import clsx from 'clsx'
import { ContainerProps } from './container.type'

export function Container({
  className,
  ...props
}: ContainerProps): JSX.Element {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}
