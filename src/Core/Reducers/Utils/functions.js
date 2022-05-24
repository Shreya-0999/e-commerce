import items from '../../../JSON/productDetails.json';

function getItemFromJSON(id) {
    let itemObj = items.filter((ele) => {
        if (ele.id == id) {
            return ele;
        }
    })
    return itemObj[0];
}

export function addToCart(action) {
    let cartArr = JSON.parse(window.localStorage.getItem('cart'));
    let itemPresent = false;
    if (cartArr) {
        cartArr.map((ele, key) => {
            if (ele.id == action.id && ele.size == action.size) {
                ele.quantity += action.quantity;
                itemPresent = true;

            }
        })
    }
    if(!itemPresent) {
        console.log("hello");
        let itemObj = getItemFromJSON(action.id);

        const cartObj = {
            id: action.id,
            quantity: action.quantity,
            size: action.size,
            image: itemObj.image,
            name: itemObj.name,
            price: itemObj.price,
            sizeAvailable: itemObj.details.size
        }
        cartArr ? cartArr.push(cartObj) : cartArr = [cartObj];
    }
    window.localStorage.setItem("cart", JSON.stringify(cartArr));
}

export function deleteFromCart(action){
    let cartArr = JSON.parse(window.localStorage.getItem('cart'));
    console.log(cartArr);
    let newCartArr = cartArr.filter(ele=>{
        if(action.item.id == ele.id && action.item.size == ele.size)
            console.log();
        else{
            return ele;
        }
    });
    console.log(newCartArr);
    window.localStorage.setItem("cart", JSON.stringify(newCartArr));
    return(newCartArr);
}