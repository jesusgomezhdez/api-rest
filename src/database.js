import MongoClient from 'mongodb';

export async function connect() {
    try {
        const client = await MongoClient.connect('mongodb+srv://jesusgomez:gomez12@cluster0-qc7h2.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useCreateIndex: true});
        const db = client.db('test');
        console.log('DB is connected');
        return db;
    } catch(e) {
        console.log(e);
    }
};