import express from "express";
import { MongoClient } from "mongodb";
const app = express();


const MONGO_URL = "mongodb://127.0.0.1"; //
async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connected ✌😊");
  return client;
}

const client = await createConnection();


const PORT = 4000;
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});


app.get("/movies", function (request, response) {
  response.send(movies);
});

app.get("/movies/:id", function (request , response){
 response.send(movies)
});

app.post("/movies1", express.json(), async function (request, response) {
   const data = request.body;
   console.log(data);
   const result = await client.db("hurix").collection("movies").insertMany(data);
   //   const movie = movies.filter((s) => s.id === id);
   response.send(result);
}
);




app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));


