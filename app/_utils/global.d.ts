export {};

declare global {
  interface Link {
    id: string;
    createdAt: Date;
    originalURL: string;
    shortURL: string;
  }
}
