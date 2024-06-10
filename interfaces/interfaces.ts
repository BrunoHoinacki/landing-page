export interface Carousel {
    page: number;
    pages: number;
    select(page: number): void;
    next(): void;
}
