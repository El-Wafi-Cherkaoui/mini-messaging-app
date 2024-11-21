const { messages } = require('../data')

function index_controller_f(req, res) {
    // res.send(messages)    
    res.render('index', {messages: messages}) 
}

function message_form(req, res) {
    // res.send('message form')
    res.render('form')
}
function handle_message_form(req, res){
    messages.push({
        user: req.body.user,
        text: req.body.text,
        added: new Date()
    })
    res.redirect("/")
}
function show_messages(req, res){
    const c_user = req.params.user 
    let k = messages.filter((m)=>m.user == c_user)
    console.log(k);
    res.render('message_details', {messages: k})
}

module.exports = {index_controller_f, message_form, handle_message_form, show_messages}
