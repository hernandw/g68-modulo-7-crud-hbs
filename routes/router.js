import express from 'express';
import {home, bookFormAdd, addBooks} from '../controllers/controller.js'
const router = express.Router()

router.get('/', home)

router.get('/agregar', bookFormAdd)

router.post('/addbooks', addBooks)

router.get('*', (req, res)=>{
res.send('404 - page not found')
})


export default router