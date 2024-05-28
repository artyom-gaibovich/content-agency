import {ChannelModel} from "../../model/channel/channel.model";
import {InputModel} from "../../../file/model/input/input.model";

export interface ChannelRepositoryInterface {
    checkOneByChannelLink(data : InputModel) : Promise<ChannelModel>
}

