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

export function addtoWishlist(action) {
    let wishlistArr = JSON.parse(window.localStorage.getItem('wishlist'));
    let itemPresent = false;
    if (wishlistArr) {
        wishlistArr.map((ele, key) => {
            if (ele.id == action.id) {
                itemPresent = true;
            }
        })
    }
    if (!itemPresent) {
        let itemObj = getItemFromJSON(action.id);
        const wishlistObj = {
            id: action.id,
            section: itemObj.section,
            image: itemObj.image,
            name: itemObj.name,
            price: itemObj.price,
        }
        wishlistArr ? wishlistArr.push(wishlistObj) : wishlistArr = [wishlistObj];
    }
    window.localStorage.setItem("wishlist", JSON.stringify(wishlistArr));
    return wishlistArr;
}

export function deleteFromWishlist(action) {
    let wishlistArr = JSON.parse(window.localStorage.getItem("wishlist"));
    let newWishlistArr = wishlistArr.filter(ele => {
        if (action.id == ele.id) {
            console.log();
        }
        else {
            return ele;
        }
    })
    if (newWishlistArr.length == 0) {
        localStorage.removeItem('wishlist');
        return null;
    }
    console.log("yo", newWishlistArr);
    window.localStorage.setItem("wishlist", JSON.stringify(newWishlistArr));
    return newWishlistArr;
}

export function updateOrderList(action) {
    let orderListArr = JSON.parse(window.localStorage.getItem('orderList'));
    let newOrderListArr = []
    console.log(action.item);
    if (orderListArr) {
        console.log("orderListArr", [...orderListArr, action.item]);
        newOrderListArr = [...orderListArr, action.item];
    }
    else
        newOrderListArr = [action.item];
    window.localStorage.setItem("orderList", JSON.stringify(newOrderListArr));
    return newOrderListArr;
}