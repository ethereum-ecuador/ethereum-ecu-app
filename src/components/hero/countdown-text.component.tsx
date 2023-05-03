interface CountdownTextProps {
  title: string
  text: string
}

export default function CountdownText({ title, text }: CountdownTextProps) {
  return (
    // <div className="flex flex-col items-center px-10 py-4 border-2 border-white border-solid rounded-full">
    <div className="flex flex-col items-center">
      <span className="countdown font-mono text-3xl text-white sm:text-4xl lg:text-6xl">
        {text}
      </span>
      <span className="text-white">{title}</span>
    </div>
  )
}
