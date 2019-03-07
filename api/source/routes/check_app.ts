import {Router, Request, Response} from 'express'
const router : Router = Router()

const sayHello = (request : Request, response : Response) => {
	var message = new String("Hey There! " + request.hostname)
	var context = {
		success : true,
		message : message
	}
	return response.status(200).json(context)
}

router.get("/health", sayHello)

export default router