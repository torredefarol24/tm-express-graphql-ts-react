import express from 'express'
import setupBodyParser from '../bootstrap/bodyparser'
import setupRoutes from '../bootstrap/routes'


class ExpressGraphqlApp {
	public apiApp : express.Application;

	constructor(){
		this.apiApp = express()
		this.bodyParserSetup(this.apiApp)
		this.routeSetup(this.apiApp)
	}

	bodyParserSetup(app:any){
		setupBodyParser(app)
	}

	routeSetup(app:any){
		setupRoutes(app)
	}
}

export default ExpressGraphqlApp