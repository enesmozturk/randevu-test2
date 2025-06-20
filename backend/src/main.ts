import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS ayarı - frontend portunu burada belirt
  app.enableCors({
    origin: [
      'http://localhost:3000', // React web app (örnek)
      'http://localhost:3001', // başka bir frontend olabilir
      'http://localhost:8081', // Expo web
      'exp://192.168.1.X:19000', // Expo Go cihazdan erişim
      'http://192.168.1.X:8081', // Expo web cihazdan erişim
    ],
    credentials: true,
  });
  // Swagger Config
  const config = new DocumentBuilder()
    .setTitle('Binenso API')
    .setDescription('Toplu alan randevu sistemi API dökümantasyonu')
    .setVersion('1.0')
    .addBearerAuth() // Authorization: Bearer <token> için
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // http://localhost:3000/api

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
