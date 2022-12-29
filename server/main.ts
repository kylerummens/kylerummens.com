import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { randomUUID } from 'crypto';
import { mw } from 'request-ip';

async function bootstrap() {

  const PORT = process.env['PORT'] || 8080;

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.use(mw());
  app.use(session({
    secret: '1xRtGF1q0Y',
    resave: true,
    saveUninitialized: true,
    genid: () => randomUUID()
  }));

  await app.listen(PORT).then(() => {
    console.log('App listening on port ' + PORT);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  bootstrap().catch(err => console.error(err));
}

