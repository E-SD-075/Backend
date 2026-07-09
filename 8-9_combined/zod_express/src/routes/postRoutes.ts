import { Router } from 'express';
import { getPosts, getPostById, createPost, updatePost, deletePost } from '../controllers/posts.ts';
import { validateBody } from '../middleware/validateBody.ts';
import { postInputSchema } from '../models/Post.ts';

const app = Router();

app.get('/posts', getPosts);
app.post('/posts', validateBody(postInputSchema), createPost);
app.get('/posts/:id', getPostById);
app.put('/posts/:id', updatePost);
app.delete('/posts/:id', deletePost);

export default app;
