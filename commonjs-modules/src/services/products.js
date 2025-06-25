async function getFullName(codeId, productName) {
    console.log("ProductX: "+ codeId + " - " + productName);
}

async function getProductLabel(productName) {
    console.log("Product: "+productName);
}

module.exports = {
    getFullName,
    getProductLabel
}