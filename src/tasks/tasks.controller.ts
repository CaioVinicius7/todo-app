import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  HttpCode,
  Body,
  Query
} from "@nestjs/common";
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiResponse,
  ApiTags,
  ApiQuery
} from "@nestjs/swagger";

import { CreateTaskDTO } from "./dto/createTaskDTO";
import { UpdateTaskDTO } from "./dto/updateTaskDTO";
import { Task } from "./entities/tasks.entity";
import { TasksService } from "./tasks.service";

@ApiTags("Tasks")
@Controller("tasks")
export class TasksController {
  constructor(private taskService: TasksService) {}

  @ApiOkResponse({
    type: Task,
    isArray: true,
    description: "Success"
  })
  @ApiQuery({
    name: "completed",
    required: false
  })
  @Get()
  async getAll(@Query("completed") completed: boolean): Promise<Task[]> {
    return this.taskService.getAll(completed);
  }

  @ApiOkResponse({
    type: Task,
    description: "Success"
  })
  @ApiNotFoundResponse({
    description: "Task not found"
  })
  @Get(":id")
  async getById(@Param("id") id: string): Promise<Task> {
    return this.taskService.getById(id);
  }

  @ApiCreatedResponse({ type: Task, description: "successfully created" })
  @Post()
  @HttpCode(201)
  async create(@Body() task: CreateTaskDTO): Promise<Task> {
    return this.taskService.create(task);
  }

  @ApiOkResponse({
    type: Task,
    description: "successfully updated"
  })
  @ApiNotFoundResponse({
    description: "Task not found"
  })
  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() task: UpdateTaskDTO
  ): Promise<Task> {
    return this.taskService.update(id, task);
  }

  @ApiResponse({
    status: 204,
    description: "successfully deleted"
  })
  @ApiNotFoundResponse({
    description: "Task not found"
  })
  @Delete(":id")
  @HttpCode(204)
  async delete(@Param("id") id: string): Promise<void> {
    return this.taskService.delete(id);
  }
}
