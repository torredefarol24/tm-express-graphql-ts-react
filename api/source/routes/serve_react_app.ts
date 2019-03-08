import {Request, Response, Router} from 'express'
import path from 'path'

const router : Router = Router()


const serveReactApp = (request : Request, response : Response) => {
	const filePath = path.join(__dirname, "../public/index.html")
	return response.sendFile(filePath);
}

router.get("/", serveReactApp)
export default router