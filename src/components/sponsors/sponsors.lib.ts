// import logoUSFQ from '/images/hosts/usfq.svg';
// import logoEPN from '/images/hosts/epn.svg';
// import logoUDLA from '/images/hosts/udla.svg';
// import logoETH from '/images/eth-ec.png';

import { SponsorProps } from "./sponsors.type";

const logoUSFQ = '/images/hosts/usfq.svg';
const logoEPN = '/images/hosts/epn.svg';
const logoUDLA = '/images/hosts/udla.svg';
const logoETH = '/images/eth-ec.svg';

interface SponsorList {
  [key: string]: SponsorProps[];
}

export const sponsors: SponsorList = {
  hosts: [
    {
      name: 'Universidad San Fransisco de Quito',
      logo: {
        url: logoUSFQ,
        alt: 'Logo USFQ',
        width: 250,
        height: 250
      }
    },
    {
      name: 'Escuela Politécnica Nacional', logo: {
        url: logoEPN,
        alt: 'Logo EPN',
        width: 250,
        height: 250
      }
    },
    {
      name: 'Universidad de las Américas', logo: {
        url: logoUDLA,
        alt: 'Logo UDLA',
        width: 250,
        height: 250
      }
    },
  ],
  sponsors: [
    {
      name: 'Universidad de las Américas', logo: {
        url: logoETH,
        alt: 'Logo UDLA',
        width: 125,
        height: 125
      }
    },
  ],
  allies: [
    {
      name: 'Universidad de las Américas', logo: {
        url: logoETH,
        alt: 'Logo UDLA',
        width: 125,
        height: 125
      }
    },
  ]
}