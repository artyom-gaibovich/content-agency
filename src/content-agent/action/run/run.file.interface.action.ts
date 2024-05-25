import {InputModel} from "../../../file/model/input/input.model";

export interface RunFileInterface {
    run(pathToFile : string, inputData : InputModel)
}