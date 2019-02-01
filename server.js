const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5000;
const app = express();

let friends = [
  {
    id: "4201548425716392852",
    firstname: "Ben",
    lastname: "Nelson",
    age: 30,
    email: "ben@lambdaschool.com"
  },
  {
    id: "3581548425717955619",
    firstname: "Austen",
    lastname: "Allred",
    age: 32,
    email: "austen@lambdaschool.com"
  },
  {
    id: "4931548425719590135",
    firstname: "Ryan",
    lastname: "Hamblin",
    age: 35,
    email: "ryan@lambdaschool.com"
  },
  {
    id: "386154842572035858",
    firstname: "Sean",
    lastname: "Chen",
    age: 35,
    email: "sean@lambdaschool.com"
  },
  {
    id: "731548425720982558",
    firstname: "Karen",
    lastname: "Zachary",
    age: 67,
    email: "michelle@gmail.com"
  },
  {
    id: "9281548425722424738",
    firstname: "Luis",
    lastname: "Hernandez",
    age: 47,
    email: "luis@lambdaschool.com"
  },
  {
    id: "8141548425768124967",
    firstname: "Beej",
    lastname: "Hall",
    age: 47,
    email: "beej@lambdaschool.com"
  },
  {
    id: "3091548425768704569",
    firstname: "Dustin",
    lastname: "Myers",
    age: 47,
    email: "dustin@lambdaschool.com"
  },
  {
    id: "7431548425770142869",
    firstname: "Josh",
    lastname: "Knell",
    age: 47,
    email: "josh@lambdaschool.com"
  },
  {
    id: "1011548425770554460",
    firstname: "Daniel",
    lastname: "Frehner",
    age: 47,
    email: "dan@lambdaschool.com"
  }
];

app.use(bodyParser.json());

app.use(cors());

app.get("/api/friends", (req, res) => {
  setTimeout(() => {
    res.send(friends);
  }, 1000);
});

app.get("/api/friends/:id", (req, res) => {
  const friend = friends.find(f => f.id == req.params.id);

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).send({ msg: "Friend not found" });
  }
});

app.post("/api/friends", (req, res) => {
  const friend = { id: generateId(), ...req.body };

  friends = [...friends, friend];

  res.send(friends);
});

app.put("/api/friends/:id", (req, res) => {
  const { id } = req.params;

  const friendIndex = friends.findIndex(f => f.id == id);

  if (friendIndex > -1) {
    const friend = { ...friends[friendIndex], ...req.body };

    friends = [
      ...friends.slice(0, friendIndex),
      friend,
      ...friends.slice(friendIndex + 1)
    ];
    res.send(friends);
  } else {
    res.status(404).send({ msg: "Friend not found" });
  }
});

app.delete("/api/friends/:id", (req, res) => {
  const { id } = req.params;

  friends = friends.filter(f => f.id !== Number(id));

  res.send(friends);
});

function generateId() {
  return `${Date.now()}${Math.floor(Math.random() * 100000000)}`;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
