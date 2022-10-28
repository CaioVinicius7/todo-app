import { Controller, Get, Param } from "@nestjs/common";

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
}
