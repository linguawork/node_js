//middleware, по сути это функция

module.exports = (req, res) =>{
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