const users = require('./users');

module.exports = {

readAll: function(){
  users.findOne();
},

findUserById: function(a,b){
  return users.find(a,b)
},

getAdmins: function(){
  return users.find('type','admin')
},

getNonAdmins: function(){
  return users.find('type','user')
},

getUsersByFavorite: function(fav){
  var stuff = users.find();
  var favarr = [];
  for (var i = 0; i < stuff.length; i++) {
    for (var j = 0; j < stuff[i].favorites.length; j++) {
      if(stuff[i].favorites[j] == 'nothing'){
        favarr.push(stuff[i])
      }
    }
  }
  if(favarr.length>1){return favarr}
  else{return null}
},

getUsersByAgeLimit: function(a){
  var stuff = users.find();
  var agearr = [];
  for (var i = 0; i < stuff.length; i++) {
      if(stuff[i].age < '20'){
        agearr.push(stuff[i])
      }
    }
    if(agearr.length>1){return agearr}
    else{return null}
},

findUserByQuery: function(a,b){
  if(a === 'last_name'){
    b = b[0].toUpperCase() + b.slice(1);
    return users.find('last_name',b);
  }
  else if(a === 'email'){
    return users.find('email',b);
  }
  else if(a === 'state'){
    return users.find('state',b);
  }
},

createUser: function(fn,ln,em,g,l,age,city,state,t,fav){
  var taco =   {
      "first_name": fn,
      "last_name": ln,
      "email": em,
      "gender": g,
      "language": l,
      "age": age,
      "city": city,
      "state": state,
      "type": t,
      "favorites": fav
    }
return users.add(taco);
},

updateUser: function(id,obj){
  var one = users.findOne('id',id)
  for(var key in obj){
    users.update(key,obj[key],one)
  }
  return users.findOne('id',id);
},

removeUser: function(id){
  var one = users.findOne('id',id)
  for(var key in one){
    users.remove(key,one[key])
    console.log(key,one[key])
  }
  return one
}

}
