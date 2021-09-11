import { SubCategories } from "./subCategories";
import { Goods } from "./goods";

export interface Categories {
    id: string,
    name: string,
    subCategories: SubCategories[],

}
