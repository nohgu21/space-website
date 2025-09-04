export interface Destination {
    name: string,
    description: string,
    image: string,
    distance: string,
    travelTime: string,
}

export interface Crew {
    name: string,
    image: string,
    role: string,
    bio: string,
}

export interface Technology {
    header:string,
    name: string,
    image: string,
    description: string,
}

export interface Navigation {
  isOpen?: boolean;
  onClose?: () => void;
}