import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "*"
  });

  const config = new DocumentBuilder()
    .setTitle("Todo App")
    .setDescription("API de gerenciamento de tarefas")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("/api-docs", app, document);

  await app.listen(3333);
}
bootstrap();
