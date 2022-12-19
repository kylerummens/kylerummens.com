import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';
import { AppController } from './app.controller';
import { SupabaseService } from './supabase.service';

@Module({
  controllers: [AppController],
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/kylerummens/browser')
    })
  ],
  providers: [SupabaseService]
})
export class AppModule {}
