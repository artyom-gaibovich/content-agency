import {PromptInterface} from "./prompt.interface";
import {IsIn, IsString} from "class-validator";

export class PromptDto implements PromptInterface{
    @IsString()
    @IsIn(['PromptConnectText', 'PromptDelAdvText', 'PromptChangeText'])
    prompt : 'PromptConnectText' | 'PromptDelAdvText' | 'PromptChangeText'
}