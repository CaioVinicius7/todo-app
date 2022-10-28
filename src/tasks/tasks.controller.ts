import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post
} from "@nestjs/common";

import { Task } from "./tasks";
import { TasksService } from "./tasks.service";

@Controller("tasks")
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  async getAll(): Promise<Task[]> {
    return this.taskService.getAll();
  }

  @Get(":id")
  async getById(@Param("id") id: string): Promise<Task> {
    return this.taskService.getById(id);
  }

  @Post()
  @HttpCode(201)
  async create(@Body() task: Task): Promise<Task> {
    return this.taskService.create(task);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() task: Task): Promise<void> {
    return this.taskService.update({
      id,
      description: task.description,
      completed: task.completed
    });
  }

  @Delete(":id")
  async delete(@Param("id") id: string): Promise<void> {
    return this.taskService.delete(id);
  }
}
