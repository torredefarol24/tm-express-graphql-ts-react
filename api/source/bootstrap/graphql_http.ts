const GraphQLHTTP = require('express-graphql')
import rootSchema from '../graphql/schema';

const graphQLServerOpts = {
	schema : rootSchema,
	graphiql : true
}

const graphQLServer = GraphQLHTTP(graphQLServerOpts);

export default graphQLServer