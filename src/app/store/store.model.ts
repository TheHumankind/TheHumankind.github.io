import { Categories } from "../models/categories";
import { GoodsItem } from "../models/goodsItem";

export interface Store21 {
    categories: Categories[],
    selectedCategory: {},
    goods: {},
    sliderItems: GoodsItem[]
    popularItems: [GoodsItem[]],
    pageData: GoodsItem[],
    currentCat: string,
    currentSubCat: string,
    currentCatName: string,
    currentSubCatName: string,
    pageNumber: number,
}