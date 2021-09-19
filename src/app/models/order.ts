export interface Order {
    id: string,
    items: Item[],
    details: {
        name: string,
        address: string,
        phone: string,
        timeToDeliver: string,
        comment: string
    }
}

export interface Item {
    id: string,
    amount: number
}
