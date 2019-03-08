import routes from '../routes/'
import GraphQLServer from './graphql_http'


const setupRoutes = (app:any) => {
	app.use("/#/", 		routes.serveReact)
	app.use("/check", 	routes.check)
	app.use("/graphql", GraphQLServer)
}

export default setupRoutes