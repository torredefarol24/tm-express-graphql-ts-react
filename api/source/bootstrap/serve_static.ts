import express from 'express'
import path from 'path';

const setupStaticFiles = (app:any) => {
	const staticPath = path.join(__dirname, "../public")
	app.use(express.static(staticPath))
}

export default setupStaticFiles