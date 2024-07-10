const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://girdhargautam6:@cluster0.menrhot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  );
  database = client.db('security');
}

function getDb() {
  if (!database) {
    throw { message: 'You must connect first!' };
  }
  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};
