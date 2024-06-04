import {Body, Controller, Inject, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {CustomerManager} from "./customer-manager";
import {CheckChannelsRequestDto} from "./model/request/check-channels/check-channels.request.dto";
import {RewritePostsRequestModel} from "./model/request/get-posts/rewrite-posts.request.model";
import {CheckChannelsRequestConverterInterface} from "../request-converter/check-channels-request-converter.interface";
import {CustomerManagerInterface} from "./customer.manager.interface";
import {RewriteContentRequestConverter} from "../request-converter/rewrite-content-request-converter";

@Controller()
export class CustomerManagerController {
    constructor(
        @Inject('REWRITE_CONTENT_REQUEST_CONVERTER') private rewriteContentRequestConverter : RewriteContentRequestConverter,
        @Inject('REQUEST_CONVERTER') private checkChannelsRequestConverter : CheckChannelsRequestConverterInterface,
        @Inject('CUSTOMER_MANAGER') private customerManager : CustomerManagerInterface) {
    }
    @UsePipes(new ValidationPipe())
    @Post('channels/check')
    async checkChannel(@Body() request : CheckChannelsRequestDto) {
        return await this.customerManager.checkChannels(this.checkChannelsRequestConverter.convert(request))
    }
    @Post('channels/posts')
    async getPosts(@Body() request : RewritePostsRequestModel) {
        return await this.customerManager.rewritePosts(request)
    }
}
