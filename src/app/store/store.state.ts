import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Categories } from "../models/categories";
import { fillSlider } from "../models/fillMainSlider";
import { fillPopular } from "../models/fillPopular";
import { GoodsItem } from "../models/goodsItem";
import { HttpService } from "../services/http.service";
import { LoadItems, SelectedCategory, UploadCurrentPage } from "./store.action";
import { Store21 } from "./store.model";

@State<Store21> ({
    name: 'StoreState',
    defaults: {
        categories: [],
        selectedCategory: {},
        goods: {},
        sliderItems: [],
        popularItems: [[]],
        pageData: [],
        pageNumber: 0
    }
})

@Injectable()
export class StoreState {
    constructor(public http: HttpService) { }

    @Action(LoadItems)
    loadItems({ patchState, getState }: StateContext<Store21>) {
        this.http.getCategories()
            .subscribe((result: any) => {
                patchState({
                    categories: result
                });
            });
        this.http.getGoods()
            .subscribe((result: any) => {
                const res = JSON.parse(JSON.stringify(result));
                patchState({
                   goods: res
                });
                patchState({
                    selectedCategory: getState().categories[0]
                })
                patchState({
                    sliderItems: fillSlider(JSON.stringify(res), [...getState().sliderItems])
                });
                patchState({
                    popularItems: fillPopular(JSON.stringify(res), getState().categories),
                });
            });
    }

    @Action(SelectedCategory)
    selectCategory({ patchState, getState }: StateContext<Store21>, { id }: SelectedCategory) {
        const cat = getState().categories;
        for(let i = 0; i < cat.length; i++) {
            if(cat[i].id === id) {
                patchState({
                    selectedCategory: cat[i],
                })
            }
        }
    }

    @Action(UploadCurrentPage)
    uploadCurrentPage({ patchState, getState }: StateContext<Store21>, { pageNumber, category, subcategory }: UploadCurrentPage) {
        this.http.getGoodsFromPage(pageNumber, category, subcategory)
            .subscribe(data => {
                const arr = data as Array<GoodsItem>;
                console.log(arr);
                patchState({
                    pageData: arr
                })

            });
    }

    @Selector() 
    public static categories(state: Store21): Categories[] {
        return state.categories;
    }

    @Selector() 
    public static mainSlider(state: Store21): GoodsItem[] {
        return state.sliderItems;
    }

    @Selector() 
    public static popularItems(state: Store21): [GoodsItem[]] {
        return state.popularItems;
    }

    @Selector() 
    public static selectCategory(state: Store21): Categories {
        return state.selectedCategory as Categories;
    }

    @Selector() 
    public static pageNumber(state: Store21): number {
        return state.pageNumber;
    }
}
