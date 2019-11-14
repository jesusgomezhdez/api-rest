import { Router } from 'express'
const router = Router();

// DB Connection
import { connect } from '../database'
import { ObjectID } from 'mongodb'

router.get('/', async (req, res) => {
    const db = await connect();
    const result = await db.collection('cards').find({}).toArray();
    res.json(result);
});

router.post('/', async (req, res) => {
    const db = await connect();
    const card = {
        title: req.body.title,
        message: req.body.message,
        phone: req.body.phone
    };
    const result = await db.collection('cards').insert(card);
    res.json(result.ops[0]);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('cards').findOne({ _id: ObjectID(id) });
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('cards').remove({ _id: ObjectID(id) });
    res.json({
        message: `Card ${id} Deleted`,
        result
    });
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const newCard = {
        title: req.body.title,
        message: req.body.message,
        phone: req.phone
    };
    const db = await connect();
    const result = await db.collection('cards').updateOne({ _id: ObjectID(id) }, {$set: newCard });
    res.json({
        message: `Card ${id} Updated`,
        result
    });
});

export default router;