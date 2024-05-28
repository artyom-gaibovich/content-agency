import {Injectable} from '@nestjs/common';
import {CustomerManagerInterface} from "./customer.manager.interface";
import {TelegramChannelRepository} from "../content-agent/repository/channel/telegram.channel.repository";
import {LinkInterface} from "../model/link/link.interface";
import {CheckTelegramChannelOutputModel} from "../file/model/output/check-telegram-channel.output.model";
import {GetPostsFromChannelResponseModel} from "./model/get-posts-from-channel.response.model";


@Injectable()
export class CustomerManager implements CustomerManagerInterface{
    constructor(private telegramChannelRepository : TelegramChannelRepository) {
    }
    async checkChannel(request : LinkInterface): Promise<CheckTelegramChannelOutputModel> {
        console.log(request)
        return await this.telegramChannelRepository.checkOneByChannelLink(
            {
                channelLink : {
                    url : request.url
                }
            }
        )
    }
    async getPosts(request : LinkInterface) : Promise<GetPostsFromChannelResponseModel> {
        const result = await this.telegramChannelRepository.getPostsByChannelLink(
            {
                channelLink : {
                    url : request.url
                }
            }
        )
        return {
            status: result.status,
            title: request.url,
            posts : result.outputData,
        }
    }
    //Не знаю, насколько это хорошее решение, так делать, использовать метод map
    async getPostsManyChannels(request : LinkInterface[]) : Promise<GetPostsFromChannelResponseModel[]>{
        const result = await this.telegramChannelRepository.getPostsManyChannels(
            request.map(channelLink => {
                return {
                    channelLink : {
                        url : channelLink.url
                    }
                }
            })
        )
        //
        return result.map(postsFromChannel => {
            return {
                title: 'BASE',
                posts: postsFromChannel.outputData,
                statusMessage: postsFromChannel.statusMessage,
                status: postsFromChannel.status
            }
        })


    }
}
