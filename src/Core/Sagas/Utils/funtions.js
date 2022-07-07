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
                // return ('user already exists')
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
    // let updatedUser = user.map((ele, key)=>{
    //     console.log(ele);
    //     if(ele.email === activeUser.email)
    //         return activeUser;
    // })
    console.log(updatedUser);
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
// arr1.map(obj => arr2.find(o => o.id === obj.id) || obj);