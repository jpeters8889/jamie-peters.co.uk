export type PaginatedCollection<T> = {
    data: T[],
    current_page: number,
    from: number,
    to: number,
    last_page: number
}
