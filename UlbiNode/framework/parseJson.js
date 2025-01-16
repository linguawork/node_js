//middleware, по сути это функция



module.exports = (req, res) =>{
/*
Although your method of overriding res.send is possible, 
it's more flexible and safer to use a middleware that 
sets the correct headers and handles JSON stringification 
without disrupting the default functionality of res.send().
 This approach offers more maintainability and preserves the
 intended behavior of your framework or server.


Короче, хотя send() по умолчанию сам назначает
Content-type и JSON.stringify, 
лучше писать по -старинке чтобы не было проблем
*/




    res.send = (data) =>{
        res.writeHead(200, {
            'Content-type': 'application/json'
        })
        res.end(JSON.stringify(data))
    }

  
    // const data = req.body; // If the data is sent in the request body (e.g., with a POST request)
    // res.send(data); // Send this data as a JSON response
    
}

//метод будет использован в class Application