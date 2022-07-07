import womenItems from '../../../JSON/women.json';
import menItems from '../../../JSON/men.json';

function getSectionWiseItem(section) {
    let items = section == 'women' ? womenItems : menItems;
    return items;
}

function getItemFromJSON(section, id) {
    let items = getSectionWiseItem(section);
    let itemObj = items.filter((ele) => {
        if (ele.id == id) {
            return ele;
        }
    })
    return itemObj[0];
}

export function addToCart(action) {
    console.log(action)
    let activeUser = JSON.parse(window.localStorage.getItem('activeUser'));
    let itemPresent = false;
    if (activeUser.cart) {
        activeUser.cart.map((ele, key) => {
            if (ele.id == action.id && ele.size == action.size) {
                ele.quantity += action.quantity;
                itemPresent = true;

            }
        })
    }
    if (!itemPresent) {
        let itemObj = getItemFromJSON(action.section, action.id);
        const cartObj = {
            id: action.id,
            section: itemObj.section,
            quantity: action.quantity,
            size: action.size,
            image: itemObj.image,
            name: itemObj.name,
            price: itemObj.price,
            sizeAvailable: itemObj.size
        }
        activeUser.cart ? activeUser.cart.push(cartObj) : activeUser.cart = [cartObj];
    }
    window.localStorage.setItem("activeUser", JSON.stringify(activeUser));
    return activeUser.cart;
}

export function deleteFromCart(action) {
    let activeUser = JSON.parse(window.localStorage.getItem('activeUser'));
    let newCartArr = activeUser.cart.filter(ele => {
        if (action.item.id == ele.id && action.item.size == ele.size)
            console.log();
        else {
            return ele;
        }
    });
    if (newCartArr.length == 0) {
        activeUser.cart = null;
        localStorage.setItem("activeUser", JSON.stringify(activeUser));
        return null;
    }
    activeUser.cart = newCartArr;
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
    return (newCartArr);
}

export function updateCartItem(action) {
    let activeUser = JSON.parse(window.localStorage.getItem('activeUser'));
    let newCartArr = []
    if (activeUser.cart) {
        activeUser.cart.map((ele, key) => {
            if (ele.id == action.item.id)
                newCartArr.push(action.item)
            else
                newCartArr.push(ele)
        })
    }
    activeUser.cart = newCartArr;
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
    return newCartArr;
}

export function emptyCart() {
    let activeUser = JSON.parse(window.localStorage.getItem('activeUser'));
    activeUser.cart = null;
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
    return null;
}

export function addtoWishlist(action) {
    console.log(action);
    let activeUser = JSON.parse(window.localStorage.getItem('activeUser'));
    let itemPresent = false;
    if (activeUser.wishlist) {
        activeUser.wishlist.map((ele, key) => {
            if (ele.id == action.id) {
                itemPresent = true;
            }
        })
    }
    if (!itemPresent) {
        let itemObj = getItemFromJSON(action.section, action.id);
        console.log(action.section, action.id);
        console.log(itemObj);
        const wishlistObj = {
            id: action.id,
            section: itemObj.section,
            image: itemObj.image,
            name: itemObj.name,
            price: itemObj.price,
        }
        activeUser.wishlist ? activeUser.wishlist.push(wishlistObj) : activeUser.wishlist = [wishlistObj];
    }
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
    return activeUser.wishlist;
}

export function deleteFromWishlist(action) {
    let activeUser = JSON.parse(window.localStorage.getItem("activeUser"));
    let newWishlistArr = activeUser.wishlist.filter(ele => {
        if (action.id == ele.id) {
            console.log();
        }
        else {
            return ele;
        }
    })
    if (newWishlistArr.length == 0) {
        activeUser.wishlist = null;
        localStorage.setItem("activeUser", JSON.stringify(activeUser));
        return null;
    }
    activeUser.wishlist = newWishlistArr;
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
    return newWishlistArr;
}

export function updateOrderList(action) {
    let activeUser = JSON.parse(localStorage.getItem("activeUser"));
    let orderObj = {
        orderId: Math.floor(100000 + Math.random() * 900000),
        date: new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
        address: action.address,
        orderStatus: 'Confirmed',
        totalPrice: action.totalPrice,
        orderItems: action.item,
    };

    let newOrderListArr = []
    if (activeUser.orderHistory) {
        newOrderListArr = [...activeUser.orderHistory, orderObj];
    }
    else
        newOrderListArr = [orderObj];

    activeUser.orderHistory = newOrderListArr;
    window.localStorage.setItem("activeUser", JSON.stringify(activeUser));
    return newOrderListArr;
}