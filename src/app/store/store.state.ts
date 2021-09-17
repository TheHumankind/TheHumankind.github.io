import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Categories } from "../models/categories";
import { fillSlider } from "../models/fillMainSlider";
import { fillPopular } from "../models/fillPopular";
import { GoodsItem } from "../models/goodsItem";
import { HttpService } from "../services/http.service";
import { CurrentGood, LoadItems, LoginUser, ResetPages, SelectedCategory, UploadCurrentPage, UploadMore } from "./store.action";
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
        currentPageItem: {},
        currentCat: '',
        currentSubCat: '',
        currentCatName: '',
        currentSubCatName: '',
        pageNumber: 0,
        userData: {}
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
                this.http.getGoods()
                    .subscribe((subResult: any) => {
                        const res = JSON.parse(JSON.stringify(subResult));
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

    @Action(UploadMore)
    uploadMore({ patchState, getState }: StateContext<Store21>) {
        const pageNumber = getState().pageNumber;
        this.http.getGoodsFromPage(getState().pageNumber, getState().currentCat, getState().currentSubCat)
            .subscribe((data) => {
                const pageData = getState().pageData;
                const newData = data as Array<GoodsItem>;
                patchState({
                    pageNumber: pageNumber + newData.length
                });
                patchState({
                    pageData: [...pageData, ...newData]
                })
            });
    }

    @Action(UploadCurrentPage)
    uploadCurrentPage({ patchState, getState }: StateContext<Store21>, { pageNumber, category, subcategory }: UploadCurrentPage) {
        patchState({
            pageNumber: 0
        });
        this.http.getGoodsFromPage(pageNumber, category, subcategory)
            .subscribe(data => {
                const arr = data as Array<GoodsItem>;
                patchState({
                    currentCat: category,
                    currentSubCat: subcategory,
                    pageData: arr,
                });
                if (arr.length < 10 && getState().pageNumber === 0) {
                    patchState({
                        pageNumber: 10,
                    });
                } else {
                    patchState({
                        pageNumber: getState().pageNumber + arr.length,
                    });
                }
                patchState({
                    currentPageItem: arr[0],
                });
                getState().categories.some((e) => {
                    if(e.id === category) {
                        patchState({
                            currentCatName: e.name,
                        })
                        e.subCategories.some((subEl) => {
                            if (subEl.id === subcategory) {
                                patchState({
                                    currentSubCatName: subEl.name
                                })
                                return;
                            }
                        });
                        return;
                    }
                });
            });
            
    }

    @Action(ResetPages)
    resetPages({ patchState }: StateContext<Store21>) {
        patchState({
            pageNumber: 0
        });
    }

    @Action(CurrentGood)
    currentGood({ patchState }: StateContext<Store21>, { item }: CurrentGood){
        patchState({
            currentPageItem: item,
        })
    }

    @Action(LoginUser)
    loginUser({ patchState, getState }: StateContext<Store21>, { login, password }: LoginUser) {
        this.http.getUserToken(login, password)
            .subscribe((res) => {
                console.log(res);
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

    @Selector() 
    public static pageData(state: Store21): GoodsItem[] {
        return state.pageData;
    }

    @Selector() 
    public static currentCategory(state: Store21): string {
        return state.currentCat;
    }

    @Selector() 
    public static currentSubCat(state: Store21): string {
        return state.currentSubCat;
    }

    @Selector() 
    public static currentCategoryName(state: Store21): string {
        return state.currentCatName;
    }

    @Selector() 
    public static currentSubCatName(state: Store21): string {
        return state.currentSubCatName;
    }

    @Selector() 
    public static currentPageItem(state: Store21): GoodsItem[] {
        const item = state.currentPageItem as GoodsItem;
        return [item];
    }
}
