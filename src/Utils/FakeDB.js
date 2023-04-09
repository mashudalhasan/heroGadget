// add data to local storage
const addToDb = id => {
    let shoppingCart = {};

    // get previous data from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }


    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;

        // shoppingCart = {
        //     '623853b2614ad5aba311fdd1' : 1
        // }
    }

    // set data to local storage
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}


export {addToDb}