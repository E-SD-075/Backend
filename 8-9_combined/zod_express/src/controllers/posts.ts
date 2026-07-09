import type { RequestHandler, Request, Response } from 'express';
import Post, { type PostInput } from '../models/Post.ts';

export const getPosts: RequestHandler = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find().populate('userId', 'firstName lastName email').lean();
    if (!posts.length) return res.send('No posts in the DB');
    res.json(posts);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const createPost: RequestHandler = async (req, res) => {
  try {
    const { title, content, userId } = req.body as PostInput;
    if (!title || !content || !userId)
      return res.status(400).json({ error: 'title, content, and userId are required' });
    const post = await Post.create<PostInput>({ title, content, userId });
    const populatedPost = await post.populate('userId', 'firstName lastName email');
    res.json(populatedPost);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const getPostById: RequestHandler = async (req, res) => {
  try {
    const {
      params: { id }
    } = req;
    const post = await Post.findById(id).populate('userId', 'firstName lastName email');
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const updatePost: RequestHandler = async (req, res) => {
  try {
    const {
      body: { title, content, userId },
      params: { id }
    } = req;
    if (!title || !content || !userId)
      return res.status(400).json({ error: 'title, content, and userId are required' });

    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    post.title = title;
    post.content = content;
    post.userId = userId;
    await post.save();

    const populatedPost = await post.populate('userId', 'firstName lastName email');
    res.json(populatedPost);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const deletePost: RequestHandler = async (req, res) => {
  try {
    const {
      params: { id }
    } = req;
    const post = await Post.findByIdAndDelete(id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post deleted' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};
