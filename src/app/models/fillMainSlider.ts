import { GoodsItem } from "./goodsItem";

export function fillSlider(res: string, oldState: GoodsItem[]) {
    const newRes = JSON.parse(res);
    for(let i = 0; i < Object.keys(newRes).length; i++) { // fill random slider components
        const selectedCat = Math.floor(Math.random() * Object.keys(newRes).length);
        const cat = newRes[`${Object.keys(newRes)[selectedCat]}`];
        const selectedGood = Math.floor(Math.random() * Object.keys(cat).length);
        const selectedSubCat = cat[`${Object.keys(cat)[selectedGood]}`] as [];
        const newGood = selectedSubCat[Math.floor(Math.random() * selectedSubCat.length)] as GoodsItem;
        if (!oldState.includes(newGood)) { 
            oldState.push(newGood);
        }
    }
    return oldState;
}