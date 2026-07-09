import { Schema, model } from 'mongoose';
import z from 'zod';

export const postInputSchema = z.strictObject({
  title: z.string().min(2, 'min length is 2 chars'),
  content: z.string().min(2, 'min length is 2 chars'),
  userId: z.string()
});

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
      trim: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required']
    }
  },
  {
    timestamps: true
  }
);

export type PostInput = z.infer<typeof postInputSchema>;
export default model('Post', postSchema);
