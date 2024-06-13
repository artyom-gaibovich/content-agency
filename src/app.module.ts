import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {CustomerManagerModule} from "./customer-manager/customer-manager.module";
import {CustomerManagerController} from "./customer-manager/customer-manager.controller";
import {FileManagerModule} from "./file-executor/file-manager.module";
import {ChannelCheckerModule} from "./content-agent/checker/channel.checker.module";
import {ChannelRepositoryModule} from "./content-agent/repository/channel/channel.repository.module";

@Module({
  imports: [CustomerManagerModule],
  controllers: [],
})
export class AppModule {

}
