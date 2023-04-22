import React, { useEffect, useState, useId } from 'react'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import clsx from 'clsx'

import { DiamondIcon } from '@components/common/DiamondIcon'
import { ImageClipPaths } from '@components/common/ImageClipPaths'
import { Container } from '@/components/common/Container'

import { days } from './day.lib'
import { Speaker } from './speakers.type'
import { Day } from './day.type'
import { nanoid } from 'nanoid'

export function Speakers(): JSX.Element {
  const id = useId()
  const [tabOrientation, setTabOrientation] = useState<
    'horizontal' | 'vertical'
  >('horizontal')

  useEffect(() => {
    const lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange(e: MediaQueryListEvent) {
      setTabOrientation(e.matches ? 'vertical' : 'horizontal')
    }

    lgMediaQuery.addEventListener('change', onMediaQueryChange)
    onMediaQueryChange({ matches: lgMediaQuery.matches } as MediaQueryListEvent)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="bg-[#241132] py-20 opacity-100 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="text-center font-display text-4xl font-medium tracking-tighter text-white sm:text-5xl md:text-left"
          >
            Speakers
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-white"></p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:pb-0">
            <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }: { selectedIndex: any }) => (
                <>
                  {days.map((day, dayIndex) => (
                    <div key={`day-${dayIndex}`} className="relative lg:pl-8">
                      <DiamondIcon
                        className={clsx(
                          'absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block',
                          dayIndex === selectedIndex
                            ? 'stroke-white text-white'
                            : 'fill-transparent stroke-slate-400'
                        )}
                      />
                      <div className="relative">
                        <div
                          className={clsx(
                            'font-mono text-sm',
                            dayIndex === selectedIndex
                              ? 'text-white'
                              : 'text-slate-500'
                          )}
                        >
                          <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                            <span className="absolute inset-0" />
                            {day.name}
                          </Tab>
                        </div>
                        <time
                          dateTime={day.dateTime}
                          className="mt-1.5 block text-2xl font-semibold tracking-tight text-white"
                        >
                          {day.date}
                        </time>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {days.map((day: Day) => (
              <Tab.Panel
                key={nanoid()}
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none"
                unmount={false}
              >
                {day.speakers.map(
                  (speaker: Speaker, speakerIndex) =>
                    speaker && (
                      <div key={`${nanoid()}-${speaker}`}>
                        <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                          <div
                            className={clsx(
                              'absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                              [
                                'border-blue-300',
                                'border-indigo-300',
                                'border-sky-300',
                              ][speakerIndex % 3]
                            )}
                          />
                          <div
                            className="absolute inset-0 bg-indigo-50"
                            style={{
                              clipPath: `url(#${id}-${speakerIndex % 3})`,
                            }}
                          >
                            {speaker?.image && (
                              <Image
                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                                src={speaker.image}
                                alt=""
                                width={400}
                                height={400}
                                priority
                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                              />
                            )}
                          </div>
                        </div>
                        <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-white">
                          {speaker.name}
                        </h3>
                        <p className="mt-1 text-base tracking-tight text-white/80">
                          {speaker.role}
                        </p>
                      </div>
                    )
                )}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}
