import express from 'express'
import axios from 'axios'
import { createUser,getUserData,updateUser,deleteUser,getDeleteUser,getUsers,getMockUsers} from '../controllers/usercontrollers.js'

const routers=express.Router()

routers.post('/createUser',createUser)
routers.get('/getUser',getUserData)
routers.get('/getDeleteUser',getDeleteUser)
routers.put('/updateUser/:id',updateUser)
routers.delete('/deleteUser/:id',deleteUser)
routers.get('/getUsers',getUsers)
routers.get('/getMockUsers',getMockUsers)


export default routers