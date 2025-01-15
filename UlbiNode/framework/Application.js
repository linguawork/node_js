const http = require('http')
const EventEmitter = require('events')

module.exports = class Application{
    constructor(){
        this.emitter = new EventEmitter
        //не будем создавать через createServer
        //сделаем через метод класса 1:30:28
        this.server = this._createServer()
    }

    //Зачем он так сделал?
    //_ means the method is private and should not be used outside
    _createServer(){
        return http.createServer((req, res) =>{
            //эмитим события, которые прописали в логике по названию 
            //события, то есть по шаблону события: 
            //`[${path}]:[${method}]`
            //параметры такие же как в функции emitter.on(`[${path}]:[${method}]`, (req, res)
            //this. added to emitter, the mask is decided to move to different function
            // the function can be reused
            const emitted = 
            this.emitter.emit(this._getRouteMask(req.url,req.method),req, res)
            

            //если неизвестный url, то закрываем поток, 
            //чтобы он не висел
            //endpoints work normally
            if(!emitted){
                res.end()
            }
        })
    }

    //private function again:вынесли сюда маску
    _getRouteMask(path, method){
        return `[${path}]:[${method}]`
    }


    /*
        The object endpoints has this structure:
            endpoints = {
                        '/users':   {
                                    'GET': handler1, 
                                    'POST': handler2, 
                                    'DELETE": handler3
                                    }
                        }
    */

    /*
        В вашем коде использование forEach для обхода ключей объекта имеет смысл, 
        даже если для каждого ключа есть только одно значение, по следующим причинам:

        Гибкость и масштабируемость: Возможно, в будущем в объекте будет несколько значений для каждого ключа, 
        или структура объекта может измениться (например, можно добавить дополнительные методы HTTP). 
        Использование forEach позволяет работать с любыми данными, даже если структура объекта будет изменяться. 
        Так что, хотя на данный момент для каждого ключа может быть только один обработчик, 
        использование forEach даёт гибкость для будущих изменений.

        Работа с динамическими данными: В реальных приложениях структура маршрутов может меняться динамически 
        (например, маршруты могут добавляться или изменяться во время работы программы). 
        Пробежав по всем ключам с помощью forEach, вы гарантируете, что обрабатываете все текущие маршруты,
        независимо от того, сколько их и как они добавляются.

        Масштабируемость к дополнительным методам или маршрутам: 
        Если в будущем появятся дополнительные маршруты или HTTP-методы, использование 
        forEach позволит вам легко адаптировать код для обработки новых значений, 
        без необходимости менять логику вручную для каждого конкретного маршрута.
        
    */





    addRouter(router){
        // Обрабатываем все маршруты (например, '/users')
        Object.keys(router.endpoints).forEach(path =>{
            const endpoint = router.endpoints[path]// Получаем объект, содержащий методы (GET, POST, DELETE)
           
            // Обрабатываем все методы для текущего маршрута (например, 'GET', 'POST', 'DELETE')
            Object.keys(endpoint).forEach(method =>{
                const handler = endpoint[method] // Получаем обработчик для метода
                    this.emitter.on(this._getRouteMask, (path, method) => {
                    //внутри события используем handler с двумя стримами
                    //принимаем от пользователя запрос и отправляем ответ
                    // Вызов обработчика для текущего метода маршрута
                    handler(req, res)
                    //теперь можно использовать класс Router внутри класса Application
                })
            })
        })
    }
}



//1:33:04
//

