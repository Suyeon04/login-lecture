<<<<<<< HEAD
"use strict";

const db = require("../config/db");

class UserStorage {
  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        else resolve(data[0]);
      });
    });
  }

  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
      db.query(query, [userInfo.id, userInfo.name, userInfo.psword], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }
}

module.exports = UserStorage;
=======
"use strict"

const fs = require("fs");

class UserStorage{
      static getUsers(...fields){
          //const users =  this.#users;
          fs.readFile("./package.json", (err, data) =>{
              if(err) throw err;
              console.log(data);
          });
        //   const newUsers = fields.reduce((newUsers, field)=>{
        //     if(users.hasOwnProperty(field)){
        //         newUsers[field]= users[field];
        //     }
        //     return newUsers;
        //   }, {});
        //   return newUsers;
      }
      static getUsersInfo(id){
          //const users = this.#users;
        //   const idx = users.id.indexOf(id);
        //   const userKeys = Object.keys(users);
        //   const userInfo = userKeys.reduce((newUser, info)=>{
        //       newUser[info] = users[info][idx];
        //       return newUser;
        //   },{});
        //   return userInfo;
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
>>>>>>> hii
