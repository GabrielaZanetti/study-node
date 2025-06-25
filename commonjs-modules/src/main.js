const { getFullName, getProductLabel } = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");

async function main() {
    getFullName(123, 'Projeto1')
    getFullName(456, 'Projeto2')
    getProductLabel('Produto3')

    console.log(config.production);
    
    database.connnectToDatabase("database")
}

main()