import {Body, Controller, Get, UsePipes, ValidationPipe} from '@nestjs/common';
import {CustomerManager} from "./customer-manager";
import {CheckChannelRequestDto, CheckChannelRequestModel} from "./model/check.channel.request.model";

@Controller('customer-manager')
export class CustomerManagerController {
    constructor(private customerManager : CustomerManager) {
    }
    @UsePipes(new ValidationPipe())
    @Get('check-channel')
    async checkChannel(@Body() checkChannelRequestModel : CheckChannelRequestModel) {
        return (await this.customerManager.checkChannel(checkChannelRequestModel))
    }
}
