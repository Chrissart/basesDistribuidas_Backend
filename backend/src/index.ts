import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers} from './graphqlSchema';

const server = new ApolloServer({ typeDefs,  resolvers });

async function startServer() {
  await server.start();

  const app = express();
  server.applyMiddleware({ app, path: '/graphql' });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();
