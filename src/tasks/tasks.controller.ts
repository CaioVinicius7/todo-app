import { Controller, Get } from "@nestjs/common";

import { Task } from "./tasks";
import { TasksService } from "./tasks.service";

@Controller("tasks")
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  async getAll(): Promise<Task[]> {
    return this.taskService.getAll();
  }
}
