const mongoose = require('mongoose');
const userModel = require('../src/models/userModel');
const productModel = require('../src/models/productModel');
const orderModel = require('../src/models/orderModel');

const setupDatabase = () => {
  // Conexión a la base de datos
  mongoose.connect('mongodb://localhost:27017/tu_basededatos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });

  // Asocia los modelos a la conexión de la base de datos
  const db = mongoose.connection;
  db.once('open', async () => {
    console.log('Conexión a la base de datos exitosa');

    // Inicializa los modelos
    await userModel.init();
    await productModel.init();
    await orderModel.init();
  });
};

module.exports = setupDatabase;