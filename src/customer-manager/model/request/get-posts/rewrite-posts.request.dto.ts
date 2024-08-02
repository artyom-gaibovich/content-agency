import {IsArray, IsIn, IsNumber, IsOptional, IsString, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {RewritePostsRequestModel} from "./rewrite-posts.request.model";
import {LinkDto} from "../../../../model/link/link.dto";
import {TypePrompt} from "../../../../model/prompt/prompt.interface";


export class RewritePostsRequestDto implements RewritePostsRequestModel{
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => LinkDto)
    links: LinkDto[];

    @IsOptional()
    @IsNumber()
    limit?: number;

    @IsString()
    prompt : string
}
