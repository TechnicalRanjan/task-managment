import { IsEnum } from 'class-validator';
import { TaskStatus } from '../tasks-status.enum';

export class updtaeTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
