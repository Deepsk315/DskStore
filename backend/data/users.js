import bcrypt from 'bcryptjs'

const users = [
    {
        name : 'Admin User',
        email : 'admin@example.com',
        password : bcrypt.hashSync('123456',10),
        isAdmin : true
    },
    {
        name : 'Thomas Shelby',
        email : 'TS@example.com',
        password : bcrypt.hashSync('123456',10),
       
    },
    {
        name : 'Arthur Shelby',
        email : 'AS@example.com',
        password : bcrypt.hashSync('123456',10),
       
    }
]

export default users