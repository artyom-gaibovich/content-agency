

import { workerData, parentPort } from 'worker_threads'

(async () => {

    const validationSessionResult = new StringSessionValidator().validate(STRING_SESSION)
    if (validationSessionResult !== 'Сессия валидная.') {
        if (parentPort) {
            parentPort.postMessage({ workerResult: validationSessionResult });
        }
    }
    const stringSession = new StringSession(STRING_SESSION)
    const client = new TelegramClient(stringSession, API_ID, API_HASH, {});
    const channelValidator = new ChannelValidator(client, new ConfigService())
    const requestData = workerData.requestData as IRequestValidateChannel

    try {
        await client.connect()
        const validateResult = await channelValidator.validate(requestData.channelName)
        const workerResult : IChannelValidatorWorkerResult = {
            workerResult : validateResult ? 'Канал существует' : 'Канал не существует'
        }
        if (parentPort) {
            parentPort.postMessage(workerResult);
        }
    }
    catch (e) {
        console.log(e)
        if (parentPort) {
            parentPort.postMessage({ workerResult: e });
        }
    }
    finally {
        await client.disconnect()
    }

})()
