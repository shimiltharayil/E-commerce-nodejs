const db = require("../config/connection");
const collection = require("../config/collection");
const bcrypt = require("bcrypt");
module.exports = {
  doSignUp: (userData) => {
    console.log(userData);
    return new Promise(async (resolve, reject) => {
      userData.Password = await bcrypt.hash(userData.Password, 15);
      db.get()
        .collection(collection.USER_COLLECTION)
        .insertOne(userData)
        .then((data) => {
          resolve(data);
        });
    });
  },
  doLogin: (userData) => {
    return new Promise(async (resolve, reject) => {
      let loginStatus = false;
      let response = {};
      let user = await db
        .get()
        .collection(collection.USER_COLLECTION)
        .findOne({ Email: userData.Email });
      if (user) {
        bcrypt.compare(userData.Password, user.Password).then((status) => {
          if (status) {
            console.log("login successful");
            response.user = user
            response.status = true;
            resolve(response);
          } else {
            console.log("wrong password");
            response({status: false})
          }
        });
      }else{
        console.log("User not found");
        response({status: false})
      }
      
    });
      
  },
};
