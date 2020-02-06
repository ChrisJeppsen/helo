require('dotenv').config()
const express = require('express'),
        massive= require('massive'),
        {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
        ctrl = require('./controller')
        app = express()
        cors = require('cors')
        session = require('express-session')

app.use(express.json())
app.use(cors())

 app.use(session ({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
}))

//These are my endpoints

app.post('/auth/register', ctrl.register)
app.post('/auth/login', ctrl.login)
app.delete('/auth/logout', ctrl.logout)
app.get('/auth/user', ctrl.getUser)

app.post('/api/addpost', ctrl.addPost)
app.get('/api/post', ctrl.getPost)




massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is connected')
    app.listen(SERVER_PORT, () => console.log(`server is running on ${SERVER_PORT}`))
})