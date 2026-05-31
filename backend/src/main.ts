import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Global prefix
  app.setGlobalPrefix('api/v1')

  // CORS
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  })

  // Global Validation Pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  )

  // Swagger API Documentation
  const config = new DocumentBuilder()
    .setTitle('Voratravel API')
    .setDescription('API REST para la plataforma de Voratravel — Agencia de Viajes Internacional')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('tours', 'Gestión de tours')
    .addTag('bookings', 'Reservas y pagos')
    .addTag('insurance', 'Seguros de viaje')
    .addTag('contact', 'Formulario de contacto')
    .addTag('auth', 'Autenticación')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/docs', app, document)

  const port = process.env.PORT || 3001
  await app.listen(port)

  console.log(`🚀 Voratravel API running on: http://localhost:${port}/api/v1`)
  console.log(`📚 Swagger docs: http://localhost:${port}/api/docs`)
}

bootstrap()
