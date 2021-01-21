'use strict';
 
// [START functions_helloworld_http]
const escapeHtml = require('escape-html');
 
var admin = require('firebase-admin');
 
var serviceAccount = require("./[sample-firebase-function.json]");
 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:'https://[sample].firebaseio.com'
});
 
// [END functions_helloworld_http]
 
// [START functions_helloworld_get]
/**
 * HTTP Cloud Function.
 * This function is exported by index.js, and is executed when
 * you make an HTTP request to the deployed function's endpoint.
 *
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */
exports.helloGET = (req, res) => {
  console.log("start");
  // for test purpose, manually get idToken from 
  const idToken = "";
  admin
  .auth()
  .verifyIdToken(idToken)
  .then((decodedToken) => {
    const uid = decodedToken.uid;
    // ...
    console.log(uid);
  })
  .catch((error) => {
    // Handle error
    console.log(error);
  });
  res.send('Hello World!');
};
