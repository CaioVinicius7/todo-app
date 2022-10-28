import { Document } from "mongoose";

import { ApiProperty } from "@nestjs/swagger";

export class Task extends Document {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  completed: boolean;
}
