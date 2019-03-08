import express from 'express'
import setupBodyParser from '../bootstrap/bodyparser'
import setupRoutes from '../bootstrap/routes'
import setupCORS from '../bootstrap/cors'
import setupServeStatic from '../bootstrap/serve_static'

class ExpressGraphqlApp {
	public apiApp : express.Application;

	constructor(){
		this.apiApp = express()
		this.bodyParserSetup(this.apiApp)
		this.corsSetup(this.apiApp)

		// Setup Mandary Route Middleware like cors & body parser 
		// before express route setup
		this.routeSetup(this.apiApp)
		this.serveStaticSetup(this.apiApp)
	}

	private bodyParserSetup(app:any){
		setupBodyParser(app)
	}

	private routeSetup(app:any){
		setupRoutes(app)
	}

	private corsSetup(app:any){
		setupCORS(app)
	}

	private serveStaticSetup(app:any){
		setupServeStatic(app)
	}
}

export default ExpressGraphqlApp