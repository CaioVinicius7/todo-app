import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDTO {
  @ApiProperty()
  description: string;

  @ApiProperty()
  completed: boolean;
}
