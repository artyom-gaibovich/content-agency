import {MtProtoClientInterface} from "./mt-proto.client.interface";
import {ChannelToRewriteModel} from "../../customer-manager/model/channels-to-rewrite.model";
import {Api, helpers, TelegramClient} from "telegram";
import {Inject, Injectable} from "@nestjs/common";
import {TELEGRAM_CLIENT} from "../../constants/di.constants";
import {GetMessagesResponseInterface} from "./res/get-messages-response.interface";
import {ChannelToCheckInterface} from "../../customer-manager/model/channel-to-check.interface";
import {CheckedChannelInterface} from "../../content-agent/checker/model/checked-channels.interface";
import {CHANNEL_NOT_FOUND} from "../../constants/errors.constants";
import {PROPERTY_USERS} from "../../constants/prop.constants";
import {IS_CHANNEL_EXISTS} from "../../constants/status.constnats";

@Injectable()
export class MTProtoClient implements MtProtoClientInterface {
    constructor(@Inject(TELEGRAM_CLIENT) private readonly telegramClient : TelegramClient) {
    }
    async getMessages(channelToRewrite : ChannelToRewriteModel): Promise<GetMessagesResponseInterface> {
        try {
            await this.telegramClient.connect()
            const result = await this.telegramClient.getMessages(channelToRewrite.link.link, {
                limit : channelToRewrite.limit
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

    async checkChannel(channelToCheck: ChannelToCheckInterface): Promise<CheckedChannelInterface> {
        try {
            await this.telegramClient.connect()
            const result = await this.telegramClient.invoke(
                new Api.channels.GetFullChannel({
                    channel: channelToCheck.channelToCheck.link,
                })
            )
            await this.telegramClient.destroy()
            return {
                status : IS_CHANNEL_EXISTS,
                channelLink : channelToCheck.channelToCheck.link,
                isChannelExists : result.hasOwnProperty(PROPERTY_USERS)
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

    async checkChannels(channelsToCheck: ChannelToCheckInterface[]): Promise<CheckedChannelInterface[]> {
        const checkedChannels : CheckedChannelInterface[] = []
        for await (const channelToCheck of channelsToCheck) {
            let message = await this.checkChannel(channelToCheck)
            checkedChannels.push(message)
        }
        return checkedChannels
    }
}