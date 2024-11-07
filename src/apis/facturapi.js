// a) Importa el paquete
const Facturapi = require('facturapi').default;

// b) Crea una instancia del cliente, usando la llave secreta
//    de la organización emisora (https://dashboard.facturapi.io/integration/apikeys)
const facturapi = new Facturapi('sk_test_6q17VQpkWL5lvKxamKJXk68j57PNoX2gyzEjDJb089');

// c) Crea una factura
async function createProduct(product) {
    const facturapiProduct = {
        description: product.name,
        product_key: "50202306",
        price: product.price
    };
    return await facturapi.products.create(facturapiProduct);
};

module.exports = { createProduct };

