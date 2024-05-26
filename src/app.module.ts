import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {RewriterModule} from './rewriter/rewriter.module';
import {Config} from './config/config';
import {CustomerManagerModule} from "./customer-manager/customer-manager.module";

@Module({
  imports: [RewriterModule],
  controllers: [AppController, CustomerManagerModule],
  providers: [AppService, Config],
})
export class AppModule {

}
