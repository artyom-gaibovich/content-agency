import {IsString} from "class-validator";
import {LinkModel} from "./link.model";

export class LinkDto implements LinkModel{
    @IsString()
    link : string
}