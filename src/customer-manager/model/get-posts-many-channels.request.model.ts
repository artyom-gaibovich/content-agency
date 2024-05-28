import {IsArray, IsString, ValidateNested} from "class-validator";
import {LinksInterface} from "../../model/link/links.interface";
import {Type} from "class-transformer";
import {GetPostsFromChannelRequestModel} from "./get-posts-from-channel.request.model";

export class GetPostsManyChannelsRequestModel implements LinksInterface{
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => GetPostsFromChannelRequestModel)
    urls: GetPostsFromChannelRequestModel[];
}