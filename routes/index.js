var express = require('express');
var router = express.Router();

const messages = [
    {
        text: "Hola",
        user: "Federico",
        added: new Date()
    },
    {
        text: "Hola mundo",
        user: "Random",
        added: new Date()
    }
];

router.get('/',(req,res)=>{
    res.render('index', {title: 'Mini messageboard', messages: messages});
})

router.get('/new',(req,res)=> {
    res.render('form',);
})

router.post('/new',(req,res)=> {
    messages.unshift(
        {text: req.body.msg, user: req.body.username, added: new Date()}
        );
    res.redirect('/');
})



module.exports = router;