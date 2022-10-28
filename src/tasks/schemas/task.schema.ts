import { Schema } from "mongoose";

interface ITask {
  description: string;
  completed: boolean;
}

export const TaskSchema = new Schema<ITask>({
  description: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  }
});
