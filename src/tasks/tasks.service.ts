import { v4 as uuidV4 } from "uuid";

import { Injectable, HttpStatus, HttpException } from "@nestjs/common";

import { Task } from "./tasks";

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: "18b54eec-45e6-43f6-8cf5-55eaac191456",
      description: "task 1",
      completed: false
    },
    {
      id: "77d3569b-90bd-4d19-b390-b55a5fbaa92f",
      description: "task 2",
      completed: false
    },
    {
      id: "544d4941-9e15-435d-963d-d985863b3a6d",
      description: "task 3",
      completed: false
    }
  ];

  async getAll(): Promise<Task[]> {
    return this.tasks;
  }

  async getById(id: string): Promise<Task> {
    const task = this.tasks.find((task) => {
      return task.id === id;
    });

    if (!task) {
      throw new HttpException("Task Not Found", HttpStatus.NOT_FOUND);
    }

    return task;
  }

  async create(task: Task): Promise<Task> {
    const id = uuidV4();

    this.tasks.push({
      id,
      description: task.description,
      completed: task.completed
    });

    return {
      id,
      description: task.description,
      completed: task.completed
    };
  }

  async update(task: Task): Promise<void> {
    const taskAlreadyExists = this.tasks.find((taskElement) => {
      return taskElement.id === task.id;
    });

    if (!taskAlreadyExists) {
      throw new HttpException("Task not exists", HttpStatus.BAD_REQUEST);
    }

    this.tasks.map((taskElement) => {
      if (taskElement.id === task.id) {
        taskElement.description = task.description;
        taskElement.completed = task.completed;
      }
    });
  }

  async delete(id: string): Promise<void> {
    const taskIndex = this.tasks.findIndex((task) => {
      return task.id === id;
    });

    this.tasks.splice(taskIndex, 1);
  }
}
