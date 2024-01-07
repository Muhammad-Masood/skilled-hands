

// Crafter Profile
export type Crafter = {
    id: string;
    name: string;
    bio: string;
    domain: string;
    location: string;
    contact: string;
    reviews: Review[];
}
export type Review = {
    id: string;
    review: number;
}

export type NavbarLink = {
    name: string;
    path: string;
};