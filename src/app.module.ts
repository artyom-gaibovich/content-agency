import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerManagerModule } from './customer-manager/customer-manager.module';
import { ContentAgentModule } from './content-agent/content-agent.module';
import { RewriterModule } from './rewriter/rewriter.module';
import { Config } from './config/config';

@Module({
  imports: [CustomerManagerModule, ContentAgentModule, RewriterModule],
  controllers: [AppController],
  providers: [AppService, Config],
})
export class AppModule {

}
