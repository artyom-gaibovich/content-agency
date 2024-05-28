import {Body, Controller, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {CustomerManager} from "./customer-manager";
import {CheckChannelsRequestDto} from "./model/request/check-channels.request.dto";

@Controller('')
export class CustomerManagerController {
    constructor(private customerManager : CustomerManager) {
    }
    @UsePipes(new ValidationPipe())
    @Post('channels/check')
    async checkChannel(@Body() request : CheckChannelsRequestDto) {
        console.log(request)
        return await this.customerManager.checkChannel(request)
    }
}
