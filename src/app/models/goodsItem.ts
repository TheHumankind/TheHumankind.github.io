export interface GoodsItem {
    id: string,
    name: string,
    imageUrls: string[],
    availableAmount: number,
    price: number,
    rating: number,
    description: string,
    category: string,
    subCategory: string,
    subCatName: string,
    catName: string,
    isInCart: boolean,
    isFavorite: boolean,
    sumForCurGood: number,
    value: number
}
