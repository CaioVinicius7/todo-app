import { PartialType } from "@nestjs/swagger";

import { CreateTaskDTO } from "./createTaskDTO";

export class UpdateTaskDTO extends PartialType(CreateTaskDTO) {}
