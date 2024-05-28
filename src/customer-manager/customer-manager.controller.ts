import {Body, Controller, Get, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {CustomerManager} from "./customer-manager";
import {CheckChannelRequestModel} from "./model/check.channel.request.model";
import {GetPostsFromChannelRequestModel} from "./model/get-posts-from-channel.request.model";
import {GetPostsManyChannelsRequestModel} from "./model/get-posts-many-channels.request.model";
import {LinksInterface} from "../model/link/links.interface";
import {LinkInterface} from "../model/link/link.interface";

@Controller('')
export class CustomerManagerController {
    constructor(private customerManager : CustomerManager) {
    }
    @UsePipes(new ValidationPipe())
    @Post('channel/check')
    async checkChannel(@Body() link : CheckChannelRequestModel) {
        return await this.customerManager.checkChannel(link)
    }
    @UsePipes(new ValidationPipe())
    @Get('posts/channel') //переименовать posts, убрать
    //сделать так, чтобы
    async getPostsFromChannel(@Body() link : GetPostsFromChannelRequestModel) {
        return await this.customerManager.getPosts(link)
    }

    @UsePipes(new ValidationPipe())
    @Post('posts')
    //переделать в post запрос
    async getPostsFromManyChannels(@Body() links : GetPostsManyChannelsRequestModel) {
        return await this.customerManager.getPostsManyChannels(links.urls as LinkInterface[])
    }
}
