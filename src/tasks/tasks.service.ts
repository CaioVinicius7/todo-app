import { Model } from "mongoose";

import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { CreateTaskDTO } from "./dto/createTaskDTO";
import { UpdateTaskDTO } from "./dto/updateTaskDTO";
import { Task } from "./entities/tasks.entity";

@Injectable()
export class TasksService {
  constructor(@InjectModel("Task") private readonly taskModel: Model<Task>) {}

  async getAll(completed?: boolean): Promise<Task[]> {
    if (completed) {
      return await this.taskModel.find({ completed });
    }

    return await this.taskModel.find().exec();
  }

  async getById(id: string): Promise<Task> {
    const task = await this.taskModel.findById(id).exec();

    if (!task) {
      throw new HttpException("Task Not Found", HttpStatus.NOT_FOUND);
    }

    return task;
  }

  async create(task: CreateTaskDTO): Promise<Task> {
    const createdTask = new this.taskModel(task);

    return await createdTask.save();
  }

  async update(id: string, task: UpdateTaskDTO): Promise<Task> {
    await this.getById(id);

    await this.taskModel.updateOne({ _id: id }, task).exec();

    const updatedTask = await this.getById(id);

    return updatedTask;
  }

  async delete(id: string): Promise<void> {
    await this.getById(id);

    await this.taskModel.deleteOne({ _id: id }).exec();
  }
}
