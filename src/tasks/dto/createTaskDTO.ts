import { IsString, IsBoolean, MaxLength } from "class-validator";

import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDTO {
  @ApiProperty()
  @IsString()
  @MaxLength(100)
  description: string;

  @ApiProperty()
  @IsBoolean()
  completed: boolean;
}
