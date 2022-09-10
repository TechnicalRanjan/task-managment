/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GenrateTaskFilterDto } from './dto/get-task-filter.dto';
import { updtaeTaskStatusDto } from './dto/status-task.dto';
import { Task } from './tasks.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  // @Get()
  // getTasks(@Query() filterDto: GenrateTaskFilterDto): Task[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.taskService.getTasksWithFilters(filterDto);
  //   } else {
  //     return this.taskService.getAllTasks();
  //   }
  // }

  // @Post()
  // createTask(@Body() createtaskdto: CreateTaskDto): Task {
  //   return this.taskService.createTask(createtaskdto);
  // }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    return this.taskService.getTaskById(id);
  }

  // @Get('/:id')
  // getTaskById(@Param('id') id: string): Task {
  //   return this.taskService.getTaskById(id);
  // }

  // @Delete('/:id')
  // deleteTask(@Param('id') id: string): void {
  //   return this.taskService.deleteTask(id);
  // }

  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body() updatetaskStatus: updtaeTaskStatusDto,
  // ): Task {
  //   const { status } = updatetaskStatus;
  //   return this.taskService.updateTask(id, status);
  // }
}
