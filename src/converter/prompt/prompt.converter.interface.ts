import {PromptInterface, TypePrompt} from "../../model/prompt/prompt.interface";

export interface PromptConverterInterface {
    convert(prompt : TypePrompt) : PromptInterface
}