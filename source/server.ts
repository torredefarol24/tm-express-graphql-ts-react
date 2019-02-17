import app from './app/main'

const port = process.env.PORT || 4000
const listenCallBack = () => console.log("Listening on port: ", port)

const server = app.listen(port, listenCallBack)