import { GoodsItem } from "../models/goodsItem";
import { Order } from "../models/order";

export class LoadItems {
    static readonly type = '[STORE] Items';
}

export class SelectedCategory {
    constructor(public id: string) {}
    static readonly type = '[STORE] Select in big menu';
}

export class SelectCat {
    constructor(public id: string) {}
    static readonly type = '[STORE] Select cat';
}


export class DeleteFavor {
    constructor(public id: string) {}
    static readonly type = '[STORE] Delete favor';
}

export class IsInFavor {
    constructor(public item: GoodsItem) {}
    static readonly type = '[STORE] Change favor status';
}

export class UploadCurrentPage {
    constructor(public pageNumber: number, public category: string, public subcategory: string) {}
    static readonly type = '[STORE] Get goods for page';
}

export class UploadMore {
    static readonly type = '[STORE] Get aditional page goods';
}

export class CurrentGood {
    constructor(public item: GoodsItem) {}
    static readonly type = '[STORE] Current Goods';
}

export class LoginUser {
    constructor(public login: string, public password: string) {}
    static readonly type = '[STORE] Login User';
}

export class GetUserData {
    static readonly type = '[STORE] Get user data';
}

export class GetAllFavorData {
    static readonly type = '[STORE] Get all favor data';
}

export class GetAllCartData {
    static readonly type = '[STORE] Get all cart data';
}

export class DeleteFromCart {
    constructor(public id: string) {}
    static readonly type = '[STORE] Delete from cart';
}

export class IsInCart {
    constructor(public item: GoodsItem) {}
    static readonly type = '[STORE] Is in cart check';
}

export class ResetPages {
    static readonly type = '[STORE] Reset pages number';
}

export class SetCountOfGoods {
    static readonly type = '[STORE] Set count of goods for one good';
}

export class CountManage {
    constructor(public id: string, public sign: boolean) {}
    static readonly type = '[STORE] Managing for count of goods in cart';
}

export class FindWithSearch {
    constructor(public text: string) {}
    static readonly type = '[STORE] Find item with search';
}

export class ClearUserOrder {
    static readonly type = '[STORE] Clear user order';
}

export class RemoveOrder {
    constructor(public order: Order) {}
    static readonly type = '[STORE] Remove order';
}

export class SortByPrice {
    static readonly type = '[STORE] Sort by price';
}

export class SortByRating {
    static readonly type = '[STORE] Sort by rating';
}

export class GetAllTech {
    static readonly type = '[STORE] Get all category tech';
}


export class LogOut {
    static readonly type = '[STORE] Log out user';
}

