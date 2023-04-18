import { StaticImageData } from "next/image";

export interface logoProps {
    url: string;
    alt: string;
    width: number;
    height: number;
}

export interface SponsorProps {
    name: string;
    logo: logoProps;
}

export interface SponsorsCardProps {
    data: SponsorProps[];
    title: string;
    id: string;
}