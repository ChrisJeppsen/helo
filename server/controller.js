const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        
        const {username, password} = req.body;
        const db = req.app.get('db')

        let user = await db.check_user(username)
        if (user[0]) {
            return res.status(400).send('user already exists')
        }

        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        let newUser = await db.register_user(username, hash);

        req.session.user = newUser[0]
        res.status(201).send(req.session.user);

    },
    login: async(req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body;

        let user = await db.check_user(username);
        if(!user[0]) {
            return res.status(400).send('username is not found')
        }
        let authenticated = bcrypt.compareSync(password, user[0].password);
        if (!authenticated) {
            return res.status(400).send('password is incorrect')
        }

        delete user[0].password;
        req.session.user = user[0];
        console.log(req.session.user)
        res.status(202).send(req.session.user);
    },
    getUser: (req, res) => {
        console.log(req)
        if(req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.status(200).send('no user logged in')
        }
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
    addPost: (req, res) => {
        const db = reeq.app.get('db')
        const {id} = req.session.user;
        const {image, title, content} = req.body;

        db.add_post(id, image, title, content).then (() => {
            res.sendStatus(200)
        })
    },
    getPost: (req, res) => {
        const db = req.app.get('db')
        const {postId} = req.session.user
        db.get_post(postId).then(data => {
            res.status(200).send(data[0])
        })
    }
}