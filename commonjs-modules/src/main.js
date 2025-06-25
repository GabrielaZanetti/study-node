const { getFullName } = require("./services/products");

async function main() {
    getFullName(123, 'Projeto1')
    getFullName(456, 'Projeto2')
}

main()