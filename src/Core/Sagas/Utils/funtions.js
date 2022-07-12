import womenItems from '../../../JSON/women.json';
import menItems from '../../../JSON/men.json';

export function createUserData(name, email, password) {
    let user = JSON.parse(localStorage.getItem('user'));
    let cartArr = JSON.parse(localStorage.getItem('cart'));
    let wishlist = JSON.parse(localStorage.getItem('wishlist'));
    let userPresent = false

    if (user) {
        user.map((ele, key) => {
            if (ele.email === email) {
                userPresent = true
            }
        })
    }
    if (!userPresent) {
        let newUserObj = {
            name: name,
            email: email,
            password: password,
            wishlist: wishlist,
            cart: cartArr,
            orderHistory: []
        }
        user ? user.push(newUserObj) : user = [newUserObj]
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("activeUser", JSON.stringify(newUserObj));
        return newUserObj;
    }
}

export function checkUserData(email, password){
    let user = JSON.parse(localStorage.getItem('user'));
    let userPresent;
    let userObj;
    if (user) {
        user.map((ele, key) => {
            if (ele.email === email && ele.password === password) {
                userPresent = true;
                userObj = ele;
            }
        })
    }
    if(userPresent) {
        localStorage.setItem("activeUser", JSON.stringify(userObj));
        return userObj;
    }
}

export function logoutUser(){
    let activeUser = JSON.parse(localStorage.getItem('activeUser'));
    let user = JSON.parse(localStorage.getItem('user'));
    let updatedUser =user.map(ele => (ele.email === activeUser.email)? activeUser : ele);
    localStorage.removeItem('activeUser');
    localStorage.setItem("user", JSON.stringify(updatedUser))
}

export function getSectionWiseItem(section){
    let items = section == 'women' ? womenItems : menItems;
    return items;
}

export function itemDetails(id, section){
    let items = getSectionWiseItem(section);
    const filteredItems= items.filter((ele)=>{
        if(ele.id == id){
            return ele;
        }
    })
    return filteredItems;
}