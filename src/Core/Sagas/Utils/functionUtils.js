import items from '../../../JSON/productDetails.json';

export function getItemFromJSON(id){
    let itemObj = items.filter((ele)=>{
        if(ele.id == id){
            return ele;
        }
    })
    return itemObj[0];
}