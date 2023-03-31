const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
const http = require('http');
// create the server
server = http.createServer((req, res) => {
  // gather up all the data into reqBody
  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
  });
  // when there's no more data
  req.on('end', () => {
    // if we got some data
    if (reqBody) {
      // parse the data
      let parsed = parseBody(reqBody);
      req.body = parsed;
    }
    // send the form page
    sendFormPage(req, res);
  });
});

const port = 5000

server.listen(port, () => console.log('the server is listening to the port ', port))


/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };