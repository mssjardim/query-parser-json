# Requirement
- express (https://expressjs.com/)

# Installation
```shell
$ npm install query-parser-json
```

# Usage

## To all routes
```javascript
var express = require('express');
var queryParser = require('query-parser-json');

var app = express();

// middleware
app.use(queryParser());
...
```

## To a specific route
```javascript
var queryParser = require('query-parser-json');

// route
app.get('/', queryParser(), (req, res, next) => {
    var query = req.query;
    res.json(query);
});

```
# Example 1
```javascript
var express = require('express');
var queryParser = require('query-parser-json');

var app = express();

// middleware
app.use(queryParser());

// route
app.get('/', (req, res, next) => {
    var query = req.query;
    res.json(query);
});

app.listen(3000);
```

# Example 2
```javascript
var express = require('express');
var queryParser = require('query-parser-json');

var app = express();

// route
app.get('/', queryParser(), (req, res, next) => {
    var query = req.query;
    res.json(query);
});

app.listen(3000);
```