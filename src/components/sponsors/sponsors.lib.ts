// import logoUSFQ from '/images/hosts/usfq.svg';
// import logoEPN from '/images/hosts/epn.svg';
// import logoUDLA from '/images/hosts/udla.svg';
// import logoETH from '/images/eth-ec.png';

import { SponsorProps } from "./sponsors.type";
//hosts
const logoUSFQ = '/images/hosts/usfq.svg';
const logoEPN = '/images/hosts/epn.svg';
const logoUDLA = '/images/hosts/udla.svg';

//sponsors
const horizonLatam = '/images/sponsors/horizon-latam.svg';

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

const logoSize = 150

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
      name: 'Horizon Techonoly LATAM', logo: {
        url: horizonLatam,
        alt: 'Logo Horizon Techonoly LATAM',
        width: logoSize,
        height: logoSize
      }
    },
  ],
  allies: [
    {
      name: 'Ethereum Foundation', logo: {
        url: logoEF,
        alt: 'Logo UDLA',
        width: 75,
        height: 75
      }
    },
    {
      name: 'LegalLab USFQ', logo: {
        url: logoLegalLab,
        alt: 'Logo LegalLab USFQ',
        width: logoSize,
        height: logoSize
      }
    },
    {
      name: 'Imagen Sistemas EPN', logo: {
        url: logoImagenSistemas,
        alt: 'Logo Imagen Sistemas EPN',
        width: logoSize,
        height: logoSize
      }
    },
    {
      name: 'Club de Innovación USFQ', logo: {
        url: logoNovaUSFQ,
        alt: 'Logo Club de Innovación USFQ',
        width: 150,
        height: 150
      }
    },
    {
      name: 'Club de Innovación EPN', logo: {
        url: logoNovaEPN,
        alt: 'Club de Innovación EPN',
        width: 150,
        height: logoSize
      }
    },
  ]
}