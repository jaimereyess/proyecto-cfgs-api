import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as fs from 'fs'
import * as dotenv from 'dotenv'

dotenv.config()

async function bootstrap() {
  const isDevelopment = process.env.NODE_ENV === 'development'
  const port = isDevelopment
    ? process.env.PORT || 3000
    : process.env.HTTPS_PORT || 443

  let httpsOptions = undefined

  if (!isDevelopment) {
    httpsOptions = {
      key: fs.readFileSync('/home/admin/decrypted-server.key'),
      cert: fs.readFileSync('/home/admin/server.crt'),
    }
  }

  const app = await NestFactory.create(AppModule, {
    ...(httpsOptions && { httpsOptions }),
  })

  app.enableCors()

  await app.listen(port)
}

bootstrap()
