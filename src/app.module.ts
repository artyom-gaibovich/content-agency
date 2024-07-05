import {Module} from '@nestjs/common';
import {CustomerManagerModule} from "./customer-manager/customer-manager.module";

@Module({
  imports: [CustomerManagerModule],
  controllers: [],
})
export class AppModule {

}
