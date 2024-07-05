import {MtProtoClientInterface} from "./mt-proto.client.interface";
import {ChannelsToRewriteModel} from "../../customer-manager/model/channels-to-rewrite.model";
import {Api, helpers, TelegramClient} from "telegram";
import {BadRequestException, Inject, Injectable} from "@nestjs/common";
import {TELEGRAM_CLIENT} from "../../constants/di.constants";

@Injectable()
export class MTProtoClient implements MtProtoClientInterface {
    constructor(@Inject(TELEGRAM_CLIENT) private readonly telegramClient : TelegramClient) {
    }
    async getMessages(channelsToRewriteModel: ChannelsToRewriteModel): Promise<helpers.TotalList<Api.Message>> {
        try {
            await this.telegramClient.connect()
            const result = await this.telegramClient.getMessages(channelsToRewriteModel.channelsToRewrite[0].link.link as string, {
                limit : 10
            })
            await this.telegramClient.disconnect()
            return result as helpers.TotalList<Api.Message>
        }
        catch (e) {
            await this.telegramClient.disconnect()
            throw new BadRequestException("NOT FOUND")
        }

    }
}