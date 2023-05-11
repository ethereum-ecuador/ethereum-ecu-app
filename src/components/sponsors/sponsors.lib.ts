import { SponsorProps } from './sponsors.type'
//hosts
const logoUSFQ = '/images/hosts/usfq.svg'
const logoEPN = '/images/hosts/epn.svg'
const logoUDLA = '/images/hosts/udla.svg'

//sponsors
const horizonLatam = '/images/sponsors/horizon-latam.svg'
const logoChaskis = '/images/sponsors/chaskis.svg'
const logoEquity = '/images/sponsors/equity.png'
const logoMundoVirtual = '/images/sponsors/mundo-virtual-solutions.png'
const web3FamiliaLogo = '/images/sponsors/web3-familia.jpg'
const metaPoolLogo = '/images/sponsors/meta-pool.svg'
const ethBogotaLogo = '/images/sponsors/eth-bogota.png'
const workingUpLogo = '/images/sponsors/working-up.jpg'
const ochoCafeLogo = '/images/sponsors/ocho-cafe.png'
const quickNodeLogo = '/images/sponsors/quick-node.png'
const diversosDigitalesLogo = '/images/sponsors/diversos-digitales.png'
const auroraLogo = '/images/sponsors/aurora.png'
const xucreLogo = '/images/sponsors/xucre.png'
const payphoneLogo = '/images/sponsors/payphone.jpg'
const tuentiLogo = '/images/sponsors/tuenti.png'

//allies
const logoEthEC = '/images/eth-ec-with-text.svg'
// const logoEF = '/images/sponsors/ef.png'
const logoImagenSistemas = '/images/allies/imagen-sistemas.jpg'
const logoFISEPN = '/images/allies/fis-epn.png'
const logoNovaEPN = '/images/allies/innovation-epn.png'
const logoNovaUSFQ = '/images/allies/innovation-usfq.png'
const logoLegalLab = '/images/allies/legal-lab.svg'

// media partners
const coinTelegraphLogo = '/images/media-partners/coin-telegraph.png'
const aeisEPNlogo = '/images/media-partners/aeis-epn.png'
const aeiqEPNlogo = '/images/media-partners/aeiq-epn.png'
const ciberseguridadEPNlogo = '/images/media-partners/ciberseguridad-epn.png'
const openLabECLogo = '/images/media-partners/open-lab-ec.svg'

//part of
const logoEthereumBlack = '/images/eth-black.png'

interface SponsorList {
  [key: string]: SponsorProps[]
}

const logoSize = 250
const logoMinSize = 125

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
      name: 'Meta Pool',
      logo: {
        url: metaPoolLogo,
        alt: 'Meta Pool Logo',
        width: 225,
        height: 225,
      },
    },
    {
      name: 'Aurora',
      logo: {
        url: auroraLogo,
        alt: 'Logo Aurora',
        width: 165,
        height: 165,
      },
    },
    {
      name: 'Xucre',
      logo: {
        url: xucreLogo,
        alt: 'Xucre Logo',
        width: 225,
        height: 225,
      },
    },
    {
      name: 'Quick Node',
      logo: {
        url: quickNodeLogo,
        alt: 'Quick Node Logo',
        width: 225,
        height: 225,
      },
    },
    {
      name: 'Payphone',
      logo: {
        url: payphoneLogo,
        alt: 'Payphone Logo',
        width: 175,
        height: 175,
      },
    },
    {
      name: 'Ethereum Bogotá',
      logo: {
        url: ethBogotaLogo,
        alt: 'Logo Ethereum Bogotá',
        width: logoSize,
        height: logoSize,
      },
    },
    {
      name: 'Tuenti',
      logo: {
        url: tuentiLogo,
        alt: 'Tuenti Logo',
        width: 175,
        height: 175,
      },
    },
    {
      name: 'Web3 Familia',
      logo: {
        url: web3FamiliaLogo,
        alt: 'Web3 Familia Logo',
        width: logoSize,
        height: logoSize,
      },
    },
    {
      name: 'Diversos Digitales',
      logo: {
        url: diversosDigitalesLogo,
        alt: 'Logo Diversos Digitales',
        width: 190,
        height: 190,
      },
    },
    {
      name: 'Ocho Café',
      logo: {
        url: ochoCafeLogo,
        alt: 'Logo Ocho Café',
        width: 175,
        height: 175,
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
      name: 'Working Up',
      logo: {
        url: workingUpLogo,
        alt: 'Working Up Logo',
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
  mediaPartners: [
    {
      name: 'Coin Telegraph',
      logo: {
        url: coinTelegraphLogo,
        alt: 'Coin Telegraph logo',
        width: logoSize,
        height: logoSize,
      },
    },
    {
      name: 'OpenLab EC',
      logo: {
        url: openLabECLogo,
        alt: 'OpenLab EC logo',
        width: logoSize,
        height: logoSize,
      },
    },
    {
      name: 'AEIS EPN',
      logo: {
        url: aeisEPNlogo,
        alt: 'Asociacion de Estudiantes de Ingeniería de Sistemas EPN logo',
        width: logoSize,
        height: logoSize,
      },
    }, 
    {
      name: 'AEIQ EPN',
      logo: {
        url: aeiqEPNlogo,
        alt: 'Asociacion de Estudiantes de Ingeniería de Química EPN logo',
        width: 125,
        height: 125,
      },
    }, 
    {
      name: 'Club Ciberseguridad EPN',
      logo: {
        url: ciberseguridadEPNlogo,
        alt: 'Club Ciberseguridad EPN logo',
        width: logoSize,
        height: logoSize,
      }
    }
  ],
  partOf: [
    
    {
      name: 'Part of Ethereum',
      logo: {
        url: logoEthereumBlack,
        alt: 'Ethereum',
        width: logoMinSize,
        height: logoMinSize,
      },
    },
  ],
}
