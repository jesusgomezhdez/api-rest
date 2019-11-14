import express, { urlencoded, json } from 'express'

const app = express();

// Importing Routes
import IndexRoutes from './routes/index'
import CardsRoutes from './routes/cards'

// settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(urlencoded({ extended: false }));
app.use(json());

// Routes
app.use(IndexRoutes);
app.use('/cards', CardsRoutes);

export default app;