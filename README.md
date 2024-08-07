### Инструкция по локальному развертыванию
1. ##### Убедитесь, что у вас установлен Node.js 21 версии
2. ##### Установите зависимости:
    - npm install --force
3. ##### Задайте переменные окружения

| Переменная              | Описание                                    | Значение(по-умолчанию)                  |
|-------------------------|---------------------------------------------|-----------------------------------------|
| **PORT**                | Порт                                        | 4000                                    |
| **APP_NAME**            | Имя приложения                              | content-agency                          |
| **SEND_TO_REWRITE_URL** | Эндпоинт к ручке для переписывания контента | http://localhost:4040/api/gpt/generate  |
| **STRING_SESSION**                | Сессия авторизации клиента Telegram         | ""                                    |
| **API_ID**            | Идентификатор клиента Telegram              | ""                                 |
| **API_HASH** | Идентификатор приложения Telegram           | ""                                      |

4. ##### Прежде чем запускать приложение:
    - Убедитесь, что запущено приложение RAG-model-go.
    - У вас авторизован клиент Telegram(*на будущее, проверка авторизации STRING_SESSION, API_ID, API_HASH)
5. Запуск:
    - npm run start


##### API. Документация

##### 1. Переписывание контента с указанных каналов
`POST http://localhost:4000/channels/posts`
<br>

````json
{
   "links": [
      {"link": "https://t.me/zakodirovanna_telega"},
      {"link": "https://t.me/habr_media"},
      {"link": "https://t.me/eda_academy"}
   ],
   "limit": 3
}
````
##### Примечание:
* limit - это количество постов, которое будет вытаскивать с 1-го канала.
* Надо аккуратно быть с лимитом, иначе могут дать бан на несколько часов.
* Prompt пока не передается(он захардкожжен).

<br>

Ответ:
```json
{
    "request_texts": ["Я Саша и живу в Бразилии.", "Путешествие для человека играет важную роль", "В кафе можно отлично перекусить"],
    "mode_gen": "PromptConnectText"
}
```


##### 2. Ручка для проверки существования каналов
`POST http://localhost:4000/channels/check`
<br>

````json
{
   "links": [
      {"link": "https://t.me/zakodirovanna_telega"},
      {"link": "https://t.me/habr_media"},
      {"link": "https://t.me/eda_academy"}
   ],
}
````

<br>

Ответ:
```json
{
   "checkedChannels": [
      {
         "status": "OK",
         "channelLink": "https://t.me/habr_media",
         "isChannelExists": true
      },
      {
         "status": "ERROR",
         "channelLink": "https://t.me/не существует",
         "isChannelExists": false
      },
      {
         "status": "OK",
         "channelLink": "https://t.me/eda_academy",
         "isChannelExists": true
      }
   ]
}
```
