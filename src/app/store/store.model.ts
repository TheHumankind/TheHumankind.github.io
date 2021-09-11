import { Categories } from "../models/categories";
import { GoodsItem } from "../models/goodsItem";

export interface Store21 {
    categories: Categories[],
    goods: {},
    sliderItems: GoodsItem[]
}