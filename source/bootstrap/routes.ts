import routes from '../routes/'

const setupRoutes = (app:any) => {
	app.use("/check", routes.check)
}

export default setupRoutes