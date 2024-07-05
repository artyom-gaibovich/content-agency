import {MtProtoClientInterface} from "./mt-proto.client.interface";
import {ChannelToRewriteModel} from "../../customer-manager/model/channels-to-rewrite.model";
import {Api, helpers, TelegramClient} from "telegram";
import {Inject, Injectable} from "@nestjs/common";
import {TELEGRAM_CLIENT} from "../../constants/di.constants";
import {GetMessagesResponseInterface} from "./res/get-messages-response.interface";

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
                message : '404_NOT_FOUND'
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
}