const axios = require('axios');
const dbConnection = require('./db-connection.js');
const dotenv = require('dotenv');
dotenv.config();

const deleteProductById = async (productId) => {
  const url = `https://famarket.cl/wp-json/wc/v3/products/${productId}`;
  const auth = {
    username: process.env.WOOCOMMERCE_KEY,
    password: process.env.WOOCOMMERCE_SECRET,
  };

  try {
    const response = await axios.delete(url, { auth });
    console.log(`Producto con ID ${productId} eliminado. Respuesta:`, response.data.id);
  } catch (error) {
    console.error(`Error al eliminar el producto con ID ${productId}:`, error.response.data);
  }
};

const deleteProducts = () => {
  const query = 'SELECT * FROM delete_products';
  dbConnection.query(query, async (error, results) => {
    if (error) {
      throw error;
    } else {
      for (const articulo of results) {
        const productIdToDelete = articulo.post_id;
        deleteProductById(productIdToDelete);
      }
    }
  });
};

module.exports = deleteProducts;
