import { GoodsItem } from "./goodsItem";

export function sortMeByPriceTrue(a:GoodsItem, b:GoodsItem) {
    const nameA = +a.price;
    const nameB = +b.price;
    let returnedValue = 0;
    if (nameA < nameB) {
        returnedValue = -1;
    }
    if (nameA > nameB) {
        returnedValue = 1;
    }
    return returnedValue;
}

export function sortMeByPriceFalse(a:GoodsItem, b:GoodsItem) {
    const nameA = +a.price;
    const nameB = +b.price;
    let returnedValue = 0;
    if (nameA < nameB) {
        returnedValue = 1;
    }
    if (nameA > nameB) {
        returnedValue = -1;
    }
    return returnedValue;
}

export function sortMeByRatingTrue(a:GoodsItem, b:GoodsItem) {
    const nameA = +a.rating;
    const nameB = +b.rating;
    let returnedValue = 0;
    if (nameA < nameB) {
        returnedValue = -1;
    }
    if (nameA > nameB) {
        returnedValue = 1;
    }
    return returnedValue;
}

export function sortMeByRatingFalse(a:GoodsItem, b:GoodsItem) {
    const nameA = +a.rating;
    const nameB = +b.rating;
    let returnedValue = 0;
    if (nameA < nameB) {
        returnedValue = 1;
    }
    if (nameA > nameB) {
        returnedValue = -1;
    }
    return returnedValue;
}
