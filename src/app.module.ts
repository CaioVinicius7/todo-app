import "dotenv/config";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { TasksModule } from "./tasks/tasks.module";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING),
    TasksModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
