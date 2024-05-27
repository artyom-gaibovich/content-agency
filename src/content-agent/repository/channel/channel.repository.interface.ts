
import {LinkInterface} from "../../../model/link/link.interface";
import {ChannelModel} from "../../model/channel/channel.model";
import {TelegramChannelModel} from "../../model/channel/telegram.channel.model";
import {InputModel} from "../../../file/model/input/input.model";

export interface ChannelRepositoryInterface {
    checkOneByChannelLink(data : InputModel) : Promise<ChannelModel>
}

