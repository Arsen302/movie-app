import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// https://www.youtube.com/watch?v=INPB3SoigUQ&t=1753s
// https://www.youtube.com/watch?v=l5-NJ2A_qsI
// https://www.youtube.com/watch?v=ISV7H1ir6lM&t=1377s
// https://www.youtube.com/watch?v=Eibva8rP7BM&t=1s

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
