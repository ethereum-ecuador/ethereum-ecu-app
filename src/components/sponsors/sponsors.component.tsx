import { SponsorsCard } from './sponsors-card.component'
import { sponsors } from './sponsors.lib'

export const Sponsors = () => {
  return (
    <>
      <SponsorsCard data={sponsors.hosts} title={'Anfitriones'} id={'hosts'} />
      <SponsorsCard
        data={sponsors.allies}
        title={'Aliados Estratégicos'}
        id={'sponsors'}
      />
      <SponsorsCard
        data={sponsors.sponsors}
        title={'Sponsors'}
        id={'sponsors'}
      />
    </>
  )
}
