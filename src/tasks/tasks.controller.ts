import { Controller, Get, Post, Param, HttpCode, Body } from "@nestjs/common";

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
}
