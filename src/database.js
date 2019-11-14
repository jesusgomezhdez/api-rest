import MongoClient from 'mongodb';

export async function connect() {
    try {
        const client = await MongoClient.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
        const db = client.db('test');
        console.log('DB is connected');
        return db;
    } catch(e) {
        console.log(e);
    }
};