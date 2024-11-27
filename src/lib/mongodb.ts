import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string; // Leer la URI desde el .env.local
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined; //eslint-disable-line
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise; //eslint-disable-line

export default clientPromise;
