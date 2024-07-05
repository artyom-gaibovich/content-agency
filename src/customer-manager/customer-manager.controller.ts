import {Body, Controller, Get, Inject, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {CustomerManager} from "./customer-manager";
import {CheckChannelsRequestDto} from "./model/request/check-channels/check-channels.request.dto";
import {RewritePostsRequestModel} from "./model/request/get-posts/rewrite-posts.request.model";
import {CustomerManagerInterface} from "./customer.manager.interface";
import {
    CheckChannelsRequestConverterInterface
} from "../converter/request/check-channels/check-channels.request-converter.interface";
import {RewriteContentRequestConverter} from "../converter/request/rewrite-content/rewrite-content.request-converter";
import {
    CHECK_CHANNELS_REQUEST_CONVERTER,
    CUSTOMER_MANAGER, PROMPT_CONVERTER,
    REWRITE_CONTENT_REQUEST_CONVERTER
} from "../constants/di.constants";
import {RewritePostsRequestDto} from "./model/request/get-posts/rewrite-posts.request.dto";
import {PromptConverterInterface} from "../converter/prompt/prompt.converter.interface";

@Controller()
export class CustomerManagerController {
    constructor(
        @Inject(PROMPT_CONVERTER) private promptConverter : PromptConverterInterface,
        @Inject(REWRITE_CONTENT_REQUEST_CONVERTER) private rewriteContentRequestConverter : RewriteContentRequestConverter,
        @Inject(CHECK_CHANNELS_REQUEST_CONVERTER) private checkChannelsRequestConverter : CheckChannelsRequestConverterInterface,
        @Inject(CUSTOMER_MANAGER) private customerManager : CustomerManagerInterface) {
    }

    @UsePipes(new ValidationPipe())
    @Get('test')
    async test() {
        return 'Application is working'
    }

    @UsePipes(new ValidationPipe())
    @Post('channels/check')
    async checkChannel(@Body() request : CheckChannelsRequestDto) {
        return await this.customerManager.checkChannels(this.checkChannelsRequestConverter.convert(request))
    }
    @UsePipes(new ValidationPipe())
    @Post('channels/posts')
    async getPosts(@Body() request : RewritePostsRequestDto) {
        return await this.customerManager.rewriteContent(this.rewriteContentRequestConverter.convert(request), this.promptConverter.convert(request.prompt))
    }
}
