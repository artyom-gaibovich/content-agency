/*
import {IsArray, ValidateNested} from "class-validator";
import {LinksInterface} from "../../model/link/links.interface";
import {Type} from "class-transformer";

export class GetPostsManyChannelsRequestModel implements LinksInterface{
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => GetPostsFromChannelRequestModel)
    urls: GetPostsFromChannelRequestModel[];
}*/
