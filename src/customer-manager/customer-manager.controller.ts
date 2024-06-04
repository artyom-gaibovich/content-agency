import {Body, Controller, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {CustomerManager} from "./customer-manager";
import {CheckChannelsRequestDto} from "./model/request/check-channels/check-channels.request.dto";
import {RewritePostsRequestModel} from "./model/request/get-posts/rewrite-posts.request.model";
import {CheckChannelsRequestConverterInterface} from "../request-converter/check-channels-request-converter.interface";
import {CustomerManagerInterface} from "./customer.manager.interface";

@Controller()
export class CustomerManagerController {
    constructor(
        private requestConverter : CheckChannelsRequestConverterInterface,
        private customerManager : CustomerManagerInterface) {
    }
    @UsePipes(new ValidationPipe())
    @Post('channels/check')
    async checkChannel(@Body() request : CheckChannelsRequestDto) {
        return await this.customerManager.checkChannels(this.requestConverter.convert(request))
    }
    /*@Post('channels/posts')
    async getPosts(@Body() request : RewritePostsRequestModel) {
        return await this.customerManager.rewritePosts(request)
    }*/
}
