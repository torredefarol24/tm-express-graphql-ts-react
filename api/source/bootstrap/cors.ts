import cors from 'cors';

const setupCors = (app:any) => {
	app.use(cors())
}

export default setupCors