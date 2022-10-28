import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  HttpCode,
  Body
} from "@nestjs/common";

import { CreateTaskDTO } from "./dto/createTaskDTO";
import { UpdateTaskDTO } from "./dto/updateTaskDTO";
import { Task } from "./entities/tasks";
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
  async create(@Body() task: CreateTaskDTO): Promise<Task> {
    return this.taskService.create(task);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() task: UpdateTaskDTO
  ): Promise<Task> {
    return this.taskService.update(id, task);
  }

  @Delete(":id")
  @HttpCode(204)
  async delete(@Param("id") id: string): Promise<void> {
    return this.taskService.delete(id);
  }
}
