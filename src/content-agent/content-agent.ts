import {LinkInterface} from "../model/link/link.interface";
import {CheckTelegramChannelOutputModel} from "../file/model/output/check-telegram-channel.output.model";
import {GetPostsFromChannelResponseModel} from "../customer-manager/model/get-posts-from-channel.response.model";
import {TelegramChannelRepository} from "./repository/channel/telegram.channel.repository";


export class ContentAgent {
    constructor(private telegramChannelRepository : TelegramChannelRepository) {
    }
    async checkChannel(request : LinkInterface): Promise<CheckTelegramChannelOutputModel> {
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