import {Body, Controller, Get, UsePipes, ValidationPipe} from '@nestjs/common';
import {CustomerManager} from "./customer-manager";
import {LinkInterface} from "../model/link/link.interface";
import {CheckChannelRequestDto} from "./model/check.channel.request.model";

@Controller('')
export class CustomerManagerController {
    constructor(private customerManager : CustomerManager) {
    }
    @UsePipes(new ValidationPipe())
    @Get('check-channel')
    async checkChannel(@Body() link : CheckChannelRequestDto) {
        return await this.customerManager.checkChannel(link)
    }
}
