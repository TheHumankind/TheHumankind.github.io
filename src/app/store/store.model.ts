import { Categories } from "../models/categories";
import { GoodsItem } from "../models/goodsItem";
import { SubCategories } from "../models/subCategories";
import { UserData } from "../models/userData";

export interface Store21 {
    categories: Categories[],
    selectedCategory: {},
    goods: {},
    sliderItems: GoodsItem[],
    subCategores: SubCategories[],
    popularItems: [GoodsItem[]],
    pageData: GoodsItem[],
    currentPageItem: {} | GoodsItem,
    userData: UserData | undefined,
    favorUserItems: GoodsItem[],
    cartUserItems: GoodsItem[],
    searchItems: GoodsItem[],
    sortOrder: boolean,
    isUserExist: boolean,
    currentCat: string,
    currentSubCat: string,
    currentCatName: string,
    currentSubCatName: string,
    pageNumber: number,
    totalPrice: number
}