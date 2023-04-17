export interface SponsorProps {
    name: string;
    logo: string;
}

export interface SponsorsCardProps {
    data: SponsorProps[];
    title: string;
    id: string;
}