import {Module} from "@nestjs/common";
import {CONFIG} from "../constants/di.constants";
import {Config} from "./config";

@Module({
    providers : [
        {
            provide : CONFIG,
            useFactory : () => {
                return new Config
            }
        }
    ],
    exports : [CONFIG]
})
export class ConfigModule {

}