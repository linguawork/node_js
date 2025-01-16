//write your own middleware
// преобразование из JSON в строку


//re-written: actually almost the same code as by ULBI
module.exports = (req, res, next) => {
    // Ensure the request is JSON formatted
    if (req.headers['content-type'] === 'application/json') {
      let data = '';
  
      req.on('data', chunk => {
        data += chunk;
      });
  
      req.on('end', () => {
        try {
          req.body = JSON.parse(data);  // Parse the JSON data and add it to the req object
          next();  // Continue to the next middleware
        } catch (error) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Invalid JSON' }));
        }
      });
    } else {
      next();  // If not JSON, just pass the request to the next middleware
    }
  };
  
