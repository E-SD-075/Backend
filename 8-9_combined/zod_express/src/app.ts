import express from 'express';
import connectDb from './db/index.ts';
connectDb();
import postsRoute from './routes/postRoutes.ts';
import usersRoute from './routes/userRoutes.ts';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('MVC API');
});

app.use('/api/', postsRoute);
app.use('/api/', usersRoute);

app.listen(port, () => console.log(`\x1b[34mMain app listening at http://localhost:${port}\x1b[0m`));
