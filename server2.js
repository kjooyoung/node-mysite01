let connect = require('connect');
let connectRoute = require('connect-route');
let url = require('url');

let requestHandlers = function(router){
    router.get('/', function(req, resp){
        resp.setHeader('Content-Type','text/html');
        resp.end('<h1>main</h1>');
    });

    router.get('/hello', function(req, resp){
        let query = url.parse(req.url, true).query;

        console.log(query);
        resp.setHeader('Content-Type','text/html');
        resp.end('<h1>hello</h1> :' + query['id']);
    });

    //path variable
    router.get('/board/view/:no', function(req, resp){
        console.log(req.params['no']);

        resp.setHeader('Content-Type','text/html');
        resp.end('<h1>hello</h1>');
    });

    //json
    router.get('/api/user/checkemail', function(req, resp){
        let result = {
            result : true,
            data : "exists"
        }

        resp.setHeader('Content-Type','application/json');
        resp.end(JSON.stringify(result));
    });
}

let app = connect();
app.use(connectRoute(requestHandlers), null);
app.listen(3000);