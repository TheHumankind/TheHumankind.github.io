import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Categories } from "../models/categories";
import { GoodsItem } from "../models/goodsItem";
import { HttpService } from "../services/http.service";
import { LoadItems } from "./store.action";
import { Store21 } from "./store.model";

@State<Store21> ({
    name: 'StoreState',
    defaults: {
        categories: [],
        goods: {},
        sliderItems: []
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
                const oldState = [...getState().sliderItems];  
                for(let i = 0; i < Object.keys(res).length; i++) {
                    const selectedCat = Math.floor(Math.random() * Object.keys(res).length);
                    const cat = res[`${Object.keys(res)[selectedCat]}`];
                    const selectedGood = Math.floor(Math.random() * Object.keys(cat).length);
                    const selectedSubCat = cat[`${Object.keys(cat)[selectedGood]}`] as [];
                    const newGood = selectedSubCat[Math.floor(Math.random() * selectedSubCat.length)] as GoodsItem;
                    if (!oldState.includes(newGood)) { 
                        oldState.push(newGood);
                    }
                }     
                patchState({
                    sliderItems: oldState
                });
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
}
