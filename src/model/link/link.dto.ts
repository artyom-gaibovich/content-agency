import {IsString} from "class-validator";
import {LinkInterface} from "./link.interface";

export class LinkDto implements LinkInterface{
    @IsString()
    link : string
}