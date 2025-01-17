//one more middleware for parsing the QUERY PARAMETERS in the url
//1:43:10

/*
A closure occurs when a function retains access 
to its lexical scope (variables) even 
when the function is executed outside that scope. 

The logics is the same:
    module.exports = function(baseUrl) {
        return function(req, res) {
            const parsedUrl = new URL(req.url, baseUrl);
            console.log(parsedUrl);
        }
    }
*/

//baseUrl передаем всю строку до users
module.exports = (baseUrl) => (req, res) =>{
    const parsedUrl = new URL(req.url, baseUrl)
    // console.log(parsedUrl)//see output

// Query parameters в поле:
// searchParams: URLSearchParams { 'id' => '1', 'page' => '5' }


//cоздаем новый объект
const params ={}
//сперва values, потом key в параметрах функции, 
// получаем ключи и значение и сохраняем в объект: (value, key)=> params[key] = value
parsedUrl.searchParams.forEach((value, key)=> params[key] = value )


    req.pathname = parsedUrl.pathname // is /users 
    /* 
        см ниже
        Объект URL изменил  req.url на  parsedUrl.pathname  
    */

// saving object to req
// console.log(params)//see output
   req.params = params //{ id:'1', page:'5' }

}



/*
    Output
    URL {
    href: 'http://localhost:5001/users',
    origin: 'http://localhost:5001',
    protocol: 'http:',
    username: '',
    password: '',
    host: 'localhost:5001',
    hostname: 'localhost',
    port: '5001',
    pathname: '/users',
    search: '',
    searchParams: URLSearchParams {},   //это и есть query parameters
    hash: ''
}
*/


/*
Когда в Postman написали query parameters in the address:
 href: 'http://localhost:5001/users?id=1&page=5',

 Query parameters в поле:
 searchParams: URLSearchParams { 'id' => '1', 'page' => '5' }

Output:
Server started on port 5001
URL {
  href: 'http://localhost:5001/users?id=1&page=5',
  origin: 'http://localhost:5001',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'localhost:5001',
  hostname: 'localhost',
  port: '5001',
  pathname: '/users',
  search: '?id=1&page=5',
  searchParams: URLSearchParams { 'id' => '1', 'page' => '5' },
  hash: ''
}



*/