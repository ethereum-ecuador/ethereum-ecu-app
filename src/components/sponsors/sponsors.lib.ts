// import logoUSFQ from '/images/hosts/usfq.svg';
// import logoEPN from '/images/hosts/epn.svg';
// import logoUDLA from '/images/hosts/udla.svg';
// import logoETH from '/images/eth-ec.png';

import { SponsorProps } from "./sponsors.type";
//hosts
const logoUSFQ = '/images/hosts/usfq.svg';
const logoEPN = '/images/hosts/epn.svg';
const logoUDLA = '/images/hosts/udla.svg';

//allies
const logoEthEC = '/images/allies/eth-ec.svg';
const logoEF = '/images/allies/ef.svg';
const logoImagenSistemas = '/images/allies/imagen-sistemas.jpg';
const logoNovaEPN = '/images/allies/innovation-epn.png';
const logoNovaUSFQ = '/images/allies/innovation-usfq.png';
const logoLegalLab = '/images/allies/legal-lab.svg';

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
        url: logoEthEC,
        alt: 'Logo UDLA',
        width: 125,
        height: 125
      }
    },
  ],
  allies: [
    {
      name: 'Ethereum Foundation', logo: {
        url: logoEF,
        alt: 'Logo UDLA',
        width: 125,
        height: 125
      }
    },
    {
      name: 'LegalLab USFQ', logo: {
        url: logoLegalLab,
        alt: 'Logo LegalLab USFQ',
        width: 125,
        height: 125
      }
    },
    {
      name: 'Imagen Sistemas EPN', logo: {
        url: logoImagenSistemas,
        alt: 'Logo Imagen Sistemas EPN',
        width: 125,
        height: 125
      }
    },
    {
      name: 'Club de Innovación USFQ', logo: {
        url: logoNovaUSFQ,
        alt: 'Logo Club de Innovación USFQ',
        width: 125,
        height: 125
      }
    },
    {
      name: 'Club de Innovación EPN', logo: {
        url: logoNovaEPN,
        alt: 'Club de Innovación EPN',
        width: 125,
        height: 125
      }
    },
  ]
}