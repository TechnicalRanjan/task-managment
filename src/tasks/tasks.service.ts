/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './tasks-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GenrateTaskFilterDto } from './dto/get-task-filter.dto';
import { TaskRepository } from './tasks.repository';
import { Task } from './tasks.entity';

@Injectable()
export class TasksService {
  constructor(private taskRepository: TaskRepository) {}

  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  // getTasksWithFilters(filterDto: GenrateTaskFilterDto): Task[] {
  //   const { status, search } = filterDto;

  //   let tasks = this.getAllTasks();

  //   // do something with status
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }

  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         return true;
  //       }

  //       return false;
  //     });
  //   }

  //   return tasks;
  // }

  // createTask(creatTaskDto: CreateTaskDto): Task {
  //   const { title, description } = creatTaskDto;
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };

  //   this.tasks.push(task);
  //   return task;
  // }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.taskRepository.findOne({
      where: { id: id },
    });

    if (!found) {
      throw new NotFoundException(`Task Not found with ID ${id}`);
    }

    return found;
  }

  // getTaskById(id: string): Task {
  //   const found = this.tasks.find((task) => task.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Task Not found with ID ${id}`);
  //   }

  //   return found;
  // }

  // deleteTask(id: string): void {
  //   this.tasks = this.tasks.filter((task) => task.id !== id);
  // }

  // updateTask(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
}
