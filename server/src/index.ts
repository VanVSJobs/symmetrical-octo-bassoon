import express from "express";
import { ApolloServer } from 'apollo-server-express';
import { schema } from './graphql';

const app = express();

async function startApolloServer(typeDefs: any, resolvers: any) {
  const port = 9000;
  const server = new ApolloServer({ typeDefs, resolvers });
  const app = express();
  await server.start();
  server.applyMiddleware({ app, path: '/api' });

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}${server.graphqlPath}`);
  });
}

startApolloServer(schema);







console.log(`[app]: http://localhost:${port}`);
