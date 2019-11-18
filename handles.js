const url = require('url');
const qs = require('querystring');
const http = require('http');

module.exports={
	serverHandle : function (req, res) {
	const route = url.parse(req.url);
	const path = route.pathname; 
	const params = qs.parse(route.query);

	res.writeHead(200, {'Content-Type': 'text/plain'});

	if (path === '/hello' && 'name' in params) {
		if(params.name ==='Sofiane'){
			res.write('Hello I am Sofiane');
		}
		else{
			res.write('Hello ' + params['name'])
		}
		} else if(path==='/'){
			res.write('Hello anonymous')
		} else {
			res.writeHead(404, {'Content-Type': 'text/plain'});
			res.write('Error 404')
		}
		res.end();
	}
}
