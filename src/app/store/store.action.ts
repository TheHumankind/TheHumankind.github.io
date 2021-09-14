import { Categories } from "../models/categories";

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