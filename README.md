# node_js
practice node.js exercises

In the folder BogdanNode there are files introduced by Bogdan course Node.js in 6 hours

The rest of the files are my information about NODE JS, including RoadMap, Q&A, ExpressJS sources.


In the server project, in index.js file:
If you want to use autostart of the script with nodemon, 
use this:
```
npm install -g nodemon
```

or
```
npm install --save-dev nodemon
```
After installing it locally, make sure your package.json file has the correct script:
```
"scripts": {
  "start": "nodemon index.js"
}

```
Then run with: npm start
Whenever you change something, the server will restart (press CTRL+S if you dont have autosave after each change)