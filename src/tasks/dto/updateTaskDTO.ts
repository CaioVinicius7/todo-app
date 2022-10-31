import { IsString, IsBoolean, MaxLength, IsOptional } from "class-validator";

import { ApiProperty } from "@nestjs/swagger";

export class UpdateTaskDTO {
  @ApiProperty({ required: false })
  @ApiProperty()
  @IsString()
  @MaxLength(100)
  @IsOptional()
  description: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  completed: boolean;
}
