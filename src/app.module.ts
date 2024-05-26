import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {CustomerManagerModule} from "./customer-manager/customer-manager.module";
import {CustomerManagerController} from "./customer-manager/customer-manager.controller";

@Module({
  imports: [CustomerManagerModule],
  controllers: [AppController],
})
export class AppModule {

}
