import {Module} from "@nestjs/common";
import {FileManager} from "./file-manager";
import {CheckChannelAction} from "./actions/check-channel/check-channel.action";

@Module({
    providers: [
        {
            provide : 'FILE_MANAGER',
            useFactory: () => {
                return new FileManager(
                    new CheckChannelAction()
                )
            }
        }
    ],
    exports: ['FILE_MANAGER']
})
export class FileManagerModule {

}