import {MtProtoClientInterface} from "./mt-proto.client.interface";
import {ChannelToRewriteModel} from "../../customer-manager/model/channels-to-rewrite.model";
import {Api, helpers, TelegramClient} from "telegram";
import {Inject, Injectable} from "@nestjs/common";
import {TELEGRAM_CLIENT} from "../../constants/di.constants";
import {GetMessagesResponseInterface} from "./res/get-messages-response.interface";
import {ChannelToCheckInterface} from "../../customer-manager/model/channel-to-check.interface";
import {CheckedChannelModel} from "../../content-agent/checker/model/checked-channels.model";
import {CHANNEL_NOT_FOUND} from "../../constants/errors.constants";

@Injectable()
export class MTProtoClient implements MtProtoClientInterface {
    constructor(@Inject(TELEGRAM_CLIENT) private readonly telegramClient : TelegramClient) {
    }
    async getMessages(channelToRewrite : ChannelToRewriteModel): Promise<GetMessagesResponseInterface> {
        try {
            await this.telegramClient.connect()
            const result = await this.telegramClient.getMessages(channelToRewrite.link.link, {
                limit : 10
            })
            await this.telegramClient.destroy()
            return {
                channelLink : channelToRewrite.link.link,
                message : result as helpers.TotalList<Api.Message>
            }
        }
        catch (e) {
            await this.telegramClient.destroy()
            return {
                channelLink : channelToRewrite.link.link,
                message : CHANNEL_NOT_FOUND
            }
        }
    }
    async getAllMessages(channelsToRewrite: ChannelToRewriteModel[]) : Promise<GetMessagesResponseInterface[]>{
        const messagesArray : GetMessagesResponseInterface[] = []
        for await (const channelToRewrite of channelsToRewrite) {
            let message = await this.getMessages(channelToRewrite)
            messagesArray.push(message)
        }
        return messagesArray
    }

    async checkChannel(channelToCheck: ChannelToCheckInterface): Promise<CheckedChannelModel> {
        try {
            await this.telegramClient.connect()
            const result = await this.telegramClient.invoke(
                new Api.channels.GetFullChannel({
                    channel: channelToCheck.channelToCheck.link,
                })
            )
            await this.telegramClient.destroy()
            return {
                status : 'Channel is exists',
                channelLink : channelToCheck.channelToCheck.link,
                isChannelExists : result.hasOwnProperty('users')
            }
        }
        catch (e) {
            await this.telegramClient.destroy()
            return {
                status : JSON.stringify(e),
                channelLink : channelToCheck.channelToCheck.link,
                isChannelExists : false
            }
        }
    }

    async checkChannels(channelsToCheck: ChannelToCheckInterface[]): Promise<CheckedChannelModel[]> {
        const checkedChannels : CheckedChannelModel[] = []
        for await (const channelToCheck of channelsToCheck) {
            let message = await this.checkChannel(channelToCheck)
            checkedChannels.push(message)
        }
        return checkedChannels
    }
}