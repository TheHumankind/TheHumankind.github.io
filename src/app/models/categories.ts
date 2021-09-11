import { SubCategories } from "./subCategories";

export interface Categories {
    id: string,
    name: string,
    subCategories: SubCategories[],
}
