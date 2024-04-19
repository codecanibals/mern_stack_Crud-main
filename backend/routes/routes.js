import express from 'express'
import { create,get} from '../controllers/usercontrollers.js'

const routers=express.Router()

routers.post('/create',create)
routers.get('/get',get)




export default routers