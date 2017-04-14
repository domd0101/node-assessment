const express = require('express');
const bodyParser = require('body-parser')

const userCtrl = require('./userCtrl');
const app = express();
app.use(bodyParser.json());


app.get('/api/users', userCtrl.readAll)
app.get('/api/users/:id', userCtrl.findUserById)
app.get('/api/admins', userCtrl.getAdmins)
app.get('/api/nonadmins', userCtrl.getNonAdmins)
app.get('/fav', userCtrl.getUsersByFavorite)
app.get('/age', userCtrl.getUsersByAgeLimit)
app.get('/query', userCtrl.findUserByQuery)
app.post('/api/users', userCtrl.createUser)
app.put('/api/users/:id',userCtrl.updateUser)
app.delete('/api/users/:id',userCtrl.removeUser)



app.listen(3000,()=>{console.log('server started .... :)');});

module.exports = app;
