import { ImageClipPathsProps } from './image-clip-paths.type'

export function ImageClipPaths({ id }: ImageClipPathsProps) {
  return (
    <svg className="hidden">
      <defs>
        <clipPath id={`${id}-0`}>
          <path d="M0,0H195.193V195.193H0Z" />
        </clipPath>
        <clipPath id={`${id}-1`}>
          <path d="M0,0H195.193V195.193H0Z" />
        </clipPath>
        <clipPath id={`${id}-2`}>
          <path d="M0,0H195.193V195.193H0Z" />
        </clipPath>
      </defs>
    </svg>
  )
}
