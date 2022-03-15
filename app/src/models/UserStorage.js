"use strict"

const fs = require("fs");

class UserStorage{
      static getUsers(...fields){
          //const users =  this.#users;
          const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field]= users[field];
            }
            return newUsers;
          }, {});
          return newUsers;
      }
      static getUsersInfo(id){
          //const users = this.#users;
          const idx = users.id.indexOf(id);
          const userKeys = Object.keys(users);
          const userInfo = userKeys.reduce((newUser, info)=>{
              newUser[info] = users[info][idx];
              return newUser;
          },{});
          return userInfo;
      }
      static save(userInfo){
          //const users = this.#users;
          users.id.push(userInfo.id);
          users.name.push(userInfo.name);
          users.psword.push(userInfo.psword);
          console.log(users);
          return {success : true};
      }

}
module.exports = UserStorage;