import {LinkInterface} from "../../model/link/link.interface";
import {IsString} from "class-validator";

export interface CheckChannelRequestModel {
    link : LinkInterface
}

export class CheckChannelRequestDto {
    @IsString()
    channelLink : string;
}