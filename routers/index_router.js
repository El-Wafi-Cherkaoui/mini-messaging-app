const express = require('express')
const index_router = express.Router()

const {index_controller_f, message_form, handle_message_form, show_messages} = require('../controllers/index_controller')



index_router.get('/', index_controller_f)
index_router.get('/new', message_form)
index_router.post('/new', handle_message_form)
index_router.get('/messages/:user', show_messages)


module.exports.index_router = index_router