// import the express library
const express = require("express");

// make a local instance of express
const app = express();

// express.urlencoded() and express.json() are Express middleware functions
// they are responsible for providing and parsing the request.body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// we can hard code some users like this
// later on we will want to store users in a database
const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];


// DELETE user
app.delete("/api/users/:id", (request, response) => {
  // get the 'id' from req.params.id
  const id = request.params.id;

  // assuming the id is valid, remove it from the array with splice()
  // which takes a number (id) and the number of records to remove (1)
  users.splice(id, 1);

  // we ALWAYS need a response of some kind
  response.json ({status: "ok"});
});


// UPDATE user
app.put("/api/users/:id", (request, response) => {
  // get the 'id' from req.params.id
  const id = request.params.id;
  
  // assuming this id is the index of the users array we can replace the user 
  // like this...
  users[id] = request.body;
  
  // we ALWAYS need a response of some kind
  response.json ({status: "ok"});
});


// SHOW 1 user
app.get("/api/users/:id", (request,response) => {
  // show the 'id' from req.params.id
  console.log(request.params.id);
  
  // returns a user at the supplied id, if one exists
  response.json (users[request.params.id]);
});


// this tells the system we want GET requests to go the /api route
// app.get("/api", (req, res) => {
  //   res.send("Our express api server is now sending this over to the browser");
// SHOW ALL users
app.get("/api/users", (request, response) => {
  console.log(users);
  response.json(users);
});


// ummm... how are you supposed to post anything from this route?
app.post("/api/users", (request, response) => {
  // verify what's being added
  console.log(request.body);

  // push the data to users
  users.push(request.body);

  // respond with status ok
  response.json({status: "ok"});
});


// req is short for request
// res is short for response
app.get("/api", (request, response) => {
  response.send("Hello from /api!");
});


// req is short for request
// res is short for response
app.get("/", (request, response) => {
  response.send("Hello from server.js!");
});


app.listen(8000, () => {
  console.log('>>> server started and listening on on port 8000');
});
