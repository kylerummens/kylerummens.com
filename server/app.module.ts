import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';
import { AppController } from './app.controller';
import { SupabaseService } from './services/supabase.service';
import { GithubService } from './services/github.service';

@Module({
  controllers: [AppController],
  imports: [
    HttpModule,
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/kylerummens/browser')
    })
  ],
  providers: [
    SupabaseService,
    GithubService
  ]
})
export class AppModule { }
