import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Categories } from "../models/categories";
import { HttpService } from "../services/http.service";
import { LoadItems } from "./store.action";
import { Store21 } from "./store.model";

@State<Store21> ({
    name: 'StoreState',
    defaults: {
        categories: []
    }
})

@Injectable()
export class StoreState {
    constructor(public http: HttpService) { }

    @Action(LoadItems)
    loadItems({ patchState }: StateContext<Store21>) {
        this.http.getShit()
            .subscribe((result: any) => {
                patchState({
                    categories: result
                });
            });
    }

    @Selector() 
    public static categories(state: Store21): Categories[] {
        return state.categories;
    }
}
