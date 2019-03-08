import ExpressGraphApp from './app/main'
import logger from './bootstrap/winston'


const expGrpApp = new ExpressGraphApp()
const port = process.env.PORT || 4000
const listenCB = () => logger.info(`Api Listening on port : ${port}`)


const server = expGrpApp.apiApp.listen(port, listenCB)