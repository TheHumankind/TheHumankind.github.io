import { Categories } from "./categories";
import { GoodsItem } from "./goodsItem";

export function fillPopular(res: string, categories: Categories[]) {
    const arrOfPopular: [GoodsItem[]] = [[]];
    const goods = JSON.parse(res);
    const allGoodsInArr = [] as GoodsItem[];
    for(let i = 0; i < categories.length; i++) {
        for(let j = 0; j < categories[i].subCategories.length; j++) {
            const fiveStar = goods[`${categories[i].id}`][`${categories[i].subCategories[j].id}`] as [];
            const filtredFiveStar = fiveStar.filter((item) => {
                if(item['rating'] === 5 && item['availableAmount'] > 0) {
                    return item['rating'];
                } else {
                    return;
                }
            });
            filtredFiveStar.forEach((e) => {allGoodsInArr.push(e)});
        }
    }    
    arrOfPopular.shift();
    for(let i = 0; i < 3; i++) {
        const subPopular: GoodsItem[] = []
        for(let j = 0; j < 6; j++) {
            let selected = Math.floor(Math.random() * (allGoodsInArr.length));
            subPopular.push(allGoodsInArr[selected]);
            allGoodsInArr.splice(selected, 1);
        }
        arrOfPopular.push(subPopular);
    }
    return arrOfPopular;
}