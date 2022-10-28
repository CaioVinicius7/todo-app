import { Model } from "mongoose";

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Task } from "./tasks";

@Injectable()
export class TasksService {
  constructor(@InjectModel("Task") private readonly taskModel: Model<Task>) {}

  async getAll(): Promise<Task[]> {
    const tasks = await this.taskModel.find().exec();

    return tasks;
  }
}
