import express from 'express'
import setupBodyParser from '../bootstrap/bodyparser'

class ExpressGraphqlApp {
	public apiApp : express.Application;

	constructor(){
		this.apiApp = express()
		this.bodyParserSetup(this.apiApp)
	}

	bodyParserSetup(app:any){
		setupBodyParser(app)
	}
}

const backend_instance = new ExpressGraphqlApp()
export default backend_instance.apiApp