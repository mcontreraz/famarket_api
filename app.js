const express = require("express");
const createProducts = require("./create-products");
const deleteProducts = require("./delete-products");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("¡Bienvenido a la API de Famarket!");
});

app.get("/api/v1", (req, res) => {
  res.send("¡Bienvenido a la versión 1 de la API de Famarket!");
});

app.get("/api/v1/actualizaProductos", async (req, res) => {
  try {
    await createProducts("update_products");
  } catch (error) {
    console.error("Error en la ruta /api/v1/actualizaProductos:", error);
    res.status(500).send("Ocurrió un error al ejecutar los scripts: " + error);
  } finally {
    res.send("Proceso completado con éxito.");
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
