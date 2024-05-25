import {InputModel} from "../../../file/model/input/input.model";
import {OutputModel} from "../../../file/model/output/output.model";
import {PathInterface} from "../../../model/path/path.interface";

//Целевое действие --- Запуск файла, и проверка канала существует он, или нет
//Узнать у отца, правильно ли я декомпозировал на Input/Output модельки, на run файла.
export interface RunFileInterfaceAction {
    run(pathToFile : PathInterface, inputData : InputModel) : Promise<OutputModel>
}