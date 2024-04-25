import express from 'express'
import axios from 'axios'
import { create,get,Updated,Delete,Getapidata ,getdeleteuser} from '../controllers/usercontrollers.js'
// import { getApiData} from '../controllers/apidatacontroller.js'

const routers=express.Router()

routers.post('/create',create)
routers.get('/get',get)
routers.get('/getdeleteuser',getdeleteuser)
routers.put('/update/:id',Updated)
routers.delete('/delete/:id',Delete)
routers.get('/Getapidata',Getapidata)


export default routers