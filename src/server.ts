import 'express-async-errors'
import express, {Request, Response, NextFunction} from 'express'
import router from './routes'

const app = express()
app.use(express.json())
app.use(router)


app.use((err: Error, req: Request, res: Response, next: NextFunction) =>{
    if(err instanceof Error) {
        return res.status(400).json({error: err.message})
    } 
    return res.status(500).json({
        status: 'error',
        message: `internal server error`
    })
})


const port = 8080

app.listen(port, () =>{
    console.log(`server running sucessfull in port 8080`)
})