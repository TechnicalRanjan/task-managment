import { IsEnum } from 'class-validator';
import { TaskStatus } from '../tasks.model';

export class updtaeTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
