import { SponsorProps } from './sponsors.type'
//hosts
const logoUSFQ = '/images/hosts/usfq.svg'
const logoEPN = '/images/hosts/epn.svg'
const logoUDLA = '/images/hosts/udla.svg'

//sponsors
const horizonLatam = '/images/sponsors/horizon-latam.svg'
const logoChaskis = '/images/sponsors/chaskis.svg'
const logoEquity = '/images/sponsors/equity.svg'
const logoMundoVirtual = '/images/sponsors/mundo-virtual-solutions.png'

//allies
const logoEthEC = '/images/eth-ec-with-text.svg'
const logoEF = '/images/sponsors/ef.png'
const logoImagenSistemas = '/images/allies/imagen-sistemas.jpg'
const logoFISEPN = '/images/allies/fis-epn.png'
const logoNovaEPN = '/images/allies/innovation-epn.png'
const logoNovaUSFQ = '/images/allies/innovation-usfq.png'
const logoLegalLab = '/images/allies/legal-lab.svg'

interface SponsorList {
  [key: string]: SponsorProps[]
}

const logoSize = 250
const logoSizeS = 250

export const sponsors: SponsorList = {
  hosts: [
    {
      name: 'Universidad San Fransisco de Quito',
      logo: {
        url: logoUSFQ,
        alt: 'Logo USFQ',
        width: logoSize,
        height: logoSize,
      },
    },
    {
      name: 'Escuela Politécnica Nacional',
      logo: {
        url: logoEPN,
        alt: 'Logo EPN',
        width: logoSize,
        height: logoSize,
      },
    },
    {
      name: 'Universidad de las Américas',
      logo: {
        url: logoUDLA,
        alt: 'Logo UDLA',
        width: logoSize,
        height: logoSize,
      },
    },
  ],
  sponsors: [
    {
      name: 'Ethereum Foundation',
      logo: {
        url: logoEF,
        alt: 'Logo Ethereum Foundation',
        width: logoSize,
        height: logoSize,
      },
    },
    {
      name: 'Ethereum Mitad del Mundo',
      logo: {
        url: logoEthEC,
        alt: 'Logo Ethereum Mitad del Mundo',
        width: logoSize,
        height: logoSize,
      },
    },
    {
      name: 'Equity',
      logo: {
        url: logoEquity,
        alt: 'Logo Equity',
        width: logoSize,
        height: logoSize,
      },
    },
    {
      name: 'Chaskis',
      logo: {
        url: logoChaskis,
        alt: 'Logo Chaskis',
        width: logoSize,
        height: logoSize,
      },
    },
    {
      name: 'Mundo Virtual',
      logo: {
        url: logoMundoVirtual,
        alt: 'Logo Mundo Virtual',
        width: 300,
        height: 125,
      },
    },
    {
      name: 'Horizon Techonoly LATAM',
      logo: {
        url: horizonLatam,
        alt: 'Logo Horizon Techonoly LATAM',
        width: 225,
        height: 225,
      },
    },
  ],
  allies: [
    {
      name: 'Ethereum Foundation',
      logo: {
        url: logoEF,
        alt: 'Ethereum Foundation',
        width: logoSize,
        height: logoSize,
      },
    },
    {
      name: 'LegalLab USFQ',
      logo: {
        url: logoLegalLab,
        alt: 'Logo LegalLab USFQ',
        width: logoSize,
        height: logoSize,
      },
    },
    {
      name: 'Club de Innovación USFQ',
      logo: {
        url: logoNovaUSFQ,
        alt: 'Logo Club de Innovación USFQ',
        width: logoSize,
        height: logoSize,
      },
    },
    {
      name: 'Facultad de Ingeniería de Sistemas EPN',
      logo: {
        url: logoFISEPN,
        alt: 'Logo Facultad de Ingeniería de Sistemas EPN',
        width: 150,
        height: 150,
      },
    },
    {
      name: 'Imagen Sistemas EPN',
      logo: {
        url: logoImagenSistemas,
        alt: 'Logo Imagen Sistemas EPN',
        width: logoSize,
        height: logoSize,
      },
    },
    {
      name: 'Club de Innovación EPN',
      logo: {
        url: logoNovaEPN,
        alt: 'Club de Innovación EPN',
        width: logoSize,
        height: logoSize,
      },
    },
  ],
}
