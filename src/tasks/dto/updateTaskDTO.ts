import { ApiProperty } from "@nestjs/swagger";

export class UpdateTaskDTO {
  @ApiProperty({ required: false })
  description: string;

  @ApiProperty({ required: false })
  completed: boolean;
}
