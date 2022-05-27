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
    if (!itemPresent) {
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
    return cartArr;
}

export function deleteFromCart(action) {
    let cartArr = JSON.parse(window.localStorage.getItem('cart'));
    let newCartArr = cartArr.filter(ele => {
        if (action.item.id == ele.id && action.item.size == ele.size)
            console.log();
        else {
            return ele;
        }
    });
    if (newCartArr.length == 0) {
        localStorage.removeItem('cart');
        return null;
    }
    window.localStorage.setItem("cart", JSON.stringify(newCartArr));
    return (newCartArr);
}

export function updateCartItem(action) {
    let cartArr = JSON.parse(window.localStorage.getItem('cart'));
    let newCartArr = []
    if (cartArr) {
        cartArr.map((ele, key) => {
            if (ele.id == action.item.id)
                newCartArr.push(action.item)
            else
                newCartArr.push(ele)
        })
    }
    window.localStorage.setItem("cart", JSON.stringify(newCartArr));
    return newCartArr;
}

export function emptyCart() {
    localStorage.removeItem('cart');
    return null;
}
