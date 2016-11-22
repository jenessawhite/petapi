var express = require('express')
var app = express()

// Create a test route
app.get('/', function (req, res) {
  res.send('<div>Hello world</div>');
});

//Create api/pets
app.get('/pets', (req,res) => {
  res.json({
    "data": {
      "pets": [
        {
          "id": 1,
          "name": "Fluffy",
          "age": 5,
          "uri": "/api/pets/1"
        }, {
          "id": 2,
          "name": "Bob",
          "age": 6,
          "uri": "/api/pets/1"
        }
      ]
    }
  }
)
})


//Create pet #1
app.get('/pets/1', (req,res) => {
  res.json({
    "id": 1,
    "name": "Fluffy",
    "age": 5,
    "type": "dog"
  }
)}
)

//Create pet #2
app.get('/pets/2', (req,res) => {
  res.json({
    "id": 2,
    "name": "Bob",
    "age": 6,
    "type": "cat"
  }
)}
)

//server listening
app.listen(8000, () => {
  console.log('App listening on port 8000!')
})

// Type: GET
// Route: /
// Returns HTML: <div>Hello world</div>
//
//
// Type: GET
// Route: /api/pets
// Returns JSON: A list of pets that looks like this:
//
// {
//   "data": {
//     "pets": [
//       {
//         "id": 1
//         "name": "Fluffy",
//         "age": 5,
//         "uri": "/api/pets/1"
//       }, {
//         "id": 2
//         "name": "Bob",
//         "age": 6,
//         "uri": "/api/pets/1"
//       }
//     ]
//   }
// }
//
//
// Type: GET
// Route: /api/pets/1
// Returns JSON:
//
// {
//   "id": 1
//   "name": "Fluffy",
//   "age": 5,
//   "type": "dog"
// }
//
//
// Type: GET
// Router: /api/pets/2
// Returns JSON:
//
// {
// "id": 2
// "name": "Bob",
// "age": 6,
// "type": "cat"
// }
