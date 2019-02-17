import * as bodyParser from 'body-parser'

const setupBodyParser = (app:any) => {
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended : true }))
}

export default setupBodyParser