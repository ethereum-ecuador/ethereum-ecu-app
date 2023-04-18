import { ParagraphProps } from './paragraph.type'

export function Paragraph({ subtitle, paragraph, children }: ParagraphProps) {
  return (
    <div className="flex w-full flex-col">
      {subtitle ? (
        <h2 className="font-display text-2xl font-medium tracking-tighter text-blue-600 md:text-3xl">
          {subtitle}
        </h2>
      ) : null}
      <p className="mb-4 text-justify font-display text-base font-normal tracking-tight text-blue-900">
        {paragraph}
      </p>
      <div className="mb-4 ml-4 text-justify font-display text-base font-normal tracking-tight text-blue-900">
        {children}
      </div>
    </div>
  )
}
