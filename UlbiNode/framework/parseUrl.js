//one more middleware for parsing the QUERY PARAMETERS in the url
//1:43:10

module.exports = (req, res) =>{
    const parsedUrl = new URL(req.url)
    console.log(parsedUrl)
}