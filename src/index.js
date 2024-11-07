// src/index.js
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schemas/productSchema');
const resolvers = require('./resolvers/productResolver');

const startServer = async () => {
  // Conectar a MongoDB
  await mongoose.connect('mongodb+srv://SrWicho:Zoro130502@clustertask.iqodm.mongodb.net/?retryWrites=true&w=majority&appName=ClusterTask');
  
  const server = new ApolloServer({ typeDefs, resolvers });
  
  server.listen().then(({ url }) => {
    console.log(`Servidor corriendo en ${url}`);
  });
};

startServer();
