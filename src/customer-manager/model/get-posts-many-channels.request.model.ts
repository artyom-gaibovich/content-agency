import {IsArray, IsString} from "class-validator";
import {LinksInterface} from "../../model/link/links.interface";

export class GetPostsFromChannelsRequestModel implements LinksInterface{
    @IsArray()
    @IsString({each : true}) //проверяю каждый элемент массив, что он является строкой
    urls : string[]
}