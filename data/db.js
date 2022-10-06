import mongoose from "mongoose";

const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log("already connected");
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("Use previous connection");
      return;
    }
    await mongoose.disconnect();
  }

  let DB_URL;
  const env = process.env.NODE_ENV;
  if (env === "development") {
    DB_URL = process.env.DB_URL_DEV;
  } else if (env === "production") {
    DB_URL = process.env.DB_URL_PROD;
  }
  const db = await mongoose.connect(DB_URL);
  console.log("New connection");
  connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("Not disconnected");
    }
  }
}

const db = { connect, disconnect };
export default db;
