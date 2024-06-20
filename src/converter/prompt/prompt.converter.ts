import {PromptConverterInterface} from "./prompt.converter.interface";
import {PromptInterface, TypePrompt} from "../../model/prompt/prompt.interface";

export class PromptConverter implements PromptConverterInterface {
    convert(prompt: TypePrompt): PromptInterface {
        return {
            prompt : prompt
        }
    }
}