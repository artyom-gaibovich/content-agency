import { Module } from '@nestjs/common';
import { CustomerManagerController } from './customer-manager.controller';
import { CustomerManager } from './customer-manager';

@Module({
  exports: [CustomerManagerController],
  providers: [CustomerManager],
  controllers: [CustomerManagerController]
})
export class CustomerManagerModule {

}
