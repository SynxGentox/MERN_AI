const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plan' });
    res.end('Hello Student! Welcome to http server class')
});

server.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
})


const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log('URL: ', url);
    console.log('Method: ', method);

    res.serHeader('Content-type', 'text/html');
})

if (method == 'GET' && url == '/') {
    res.writeHead(200);
    res.end('<h1>Welcome to Home Page </h1>');
} else if (method === 'GET' && url == '/about') {
    res.writeHead(200);
    res.end('<h1>Welcome to about Page </h1>');
} else {
    res.writeHead(404);
    res.end('<h1>404 - page not found</h1>');
}