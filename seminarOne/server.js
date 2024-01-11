const http = require('http');
const url = require('url');

let pageViews = {
  '/home': 0,
  '/about': 0
};

const server = http.createServer((req, res) => {
    console.log('Запрос получен');
  const path = url.parse(req.url).pathname;
  
  if (path === '/home') {
    pageViews['/home']++;
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write(<html><body><h1>Home Page</h1><p>Page views: ${pageViews['/home']}</p><a href="/about">About</a></body></html>);
    res.end();
  } else if (path === '/about') {
    pageViews['/about']++;
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write(<html><body><h1>About Page</h1><p>Page views: ${pageViews['/about']}</p><a href="/">Home</a></body></html>);
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
    res.write('404 Not Found');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
