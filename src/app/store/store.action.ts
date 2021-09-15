import { Categories } from "../models/categories";
import { GoodsItem } from "../models/goodsItem";

export class LoadItems {
    static readonly type = '[STORE] Items';
}

export class SelectedCategory {
    constructor(public id: string) {}
    static readonly type = '[STORE] Select in big menu';
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

export class ResetPages {
    static readonly type = '[STORE] Reset pages number';
}