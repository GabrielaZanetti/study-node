import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];

console.log("Welcome to the yout Cart!\n");

const item1 = await createItem("Orange", 20.99, 1);
const item2 = await createItem("Banana", 39.99, 3);

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

// await cartService.removeItemIndex(myCart, 1)
await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart);

// await cartService.deletItem(myCart, item1.name)
// await cartService.deletItem(myCart, item2.name)

await cartService.calculateTotal(myCart);
