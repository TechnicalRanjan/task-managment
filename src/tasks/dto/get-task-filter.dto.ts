import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../tasks-status.enum';

export class GenrateTaskFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
