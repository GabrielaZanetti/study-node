async function addItem(userCart, item) {
    userCart.push(item);
}

async function calculateTotal(userCart) {
    console.log("Cart Total is: \n");
    
    console.log(`Total: ${userCart.reduce( (total, item) => total + item.subtotal(), 0 )}`);
}

async function deletItem(userCart, name) {
    const index = userCart.findIndex(item => item.name === name);

    if (index !== -1)
        userCart.splice(index, 1);
}

async function removeItemIndex(userCart, index) {
    const deleteItens = index - 1;
    if (deleteItens >= 0 && deleteItens < userCart.length) {
        userCart.splice(deleteItens, 1)
    }
}

async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex(({ name }) => name === item.name);
    
    if (indexFound == -1) {
        console.log("Item não encontrado");
        return;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

async function displayCart(userCart) {
    console.log("Cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index+1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal: ${item.subtotal()}`);
    });
}

export { addItem, calculateTotal, deletItem, removeItem, removeItemIndex, displayCart }