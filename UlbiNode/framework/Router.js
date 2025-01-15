/*
Чтобы сделать переиспользуемый фреймворк

перенесли класс Router в
этот файл и экспортировали его в
index.js


Класс Router решает проблему маршрутизации
Без использования бесконечных if else
все endpoints прописаны


Но так как у нас есть закоменченный emitter
его нужно куда определить
*/

module.exports = class Router{
    constructor(){
    /*
        The object endpoints has this structure:
            endpoints ={
                '/users': {
                    'GET': handler1, 
                    'POST': handler2, 
                    'DELETE": handler3
                }
            }
    */

        this.endpoints = {}
    }


    //default method, path to the method, handler function
    request(method='GET', path, handler){
        //1 проверяем есть ли уже такой метод в endpoint
        /*
            this.endpoints[path] accesses the object 
            corresponding to path (like '/users').

            this.endpoints[path][method] accesses the 
            handler associated with the HTTP method 
            (like 'GET', 'POST', or 'DELETE').
        */
        if(!this.endpoints[path]){
            //if no path like "/users", we initialize with empty obj
            this.endpoints[path] = {}
        }
        //'/users' 
        //сохраняем в другую переменную
        const endpoint = this.endpoints[path]

        //обращаемся к методу внутри path [GET, POST, PUT] [GET, POST, PUT, DELETE]
        //проверяем наличие метода, если он уже есть
        if(endpoint[method]){
            throw new Error(`[${method}] по адресу ${path} уже существует`  )
        }
        //если метода нет, то цепляем handler и событие к нему
        //import event
        endpoint[method] = handler
        /*
            1:24:49 
            Событие создаем по особому названию -
            "[path]:[method]' :

                [/users]:[get]
                [/users]:[post]
                [/comments]:[delete]

            Можно писать по-разному название события, 
            это один из вариантов
        */

//после выноса Router в отдельный файл, emitter доступен глобально,
//глобальный объект это нехорошо, комментим      
        // emitter.on(`[${path}]:[${method}]`, (req, res) => {
        //     //внутри события используем handler с двумя стримами
        //     //принимаем от пользователя запрос и отправляем ответ
        //     handler(req, res)
        //     //теперь можно использовать класс Router
        // })
    }

    get(path, handler){
        this.request('GET', path, handler)
    }

    post(path, handler){
        this.request('POST', path, handler)
    }

    put(path, handler){
        this.request('PUT', path, handler)
    }

    delete(path, handler){
        this.request('DELETE', path, handler)
    }
}