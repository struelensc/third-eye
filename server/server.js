// const { ApolloServer } = require("apollo-server");
// const mongoose = require("mongoose");

// const typeDefs = require("./graphql/typeDefs");
// const resolvers = require("./graphql/resolvers");

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// mongoose
//   .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/third-eye", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("MonogDB Connection Successful");
//     return server.listen({ port: 5000 });
//   })
//   .then((res) => {
//     console.log(`Server running at ${res.url}`);
//   });

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs, resolvers } = require("./graphql");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
