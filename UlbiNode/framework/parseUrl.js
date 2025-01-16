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
    //console.log(parsedUrl)//see output

    return  req.pathname = parsedUrl.pathname // is /users 
    /* 
        см ниже
        Объект URL изменил  req.url на  parsedUrl.pathname  
    */
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
