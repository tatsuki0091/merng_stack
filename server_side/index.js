const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const { MONGODB } = require("./config.js");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const { PubSub } = require("graphql-subscriptions");

const pubSub = new PubSub();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubSub }),
});

// Connect DB and Run server
mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log(MONGODB);
    console.log("Mongo DB connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`server running at ${res.url}`);
  });
