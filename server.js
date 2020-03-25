const http = require('http'); // moduldur http server ucun
const html = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
     <link rel="stylesheet" href="app.css">
  </head>
  <body>
    <h1>Hello World</h1>

    <button>Click me </button>

    <script src="app.js"></script>

  </body>
</html>
`;

const css = `
 body {
        margin: 0;
        padding: 0;
        text-align: center;
      }
      h1 {
        color: blue;
      }
`;
const js = `
 const button = document.querySelector('button');
 button.addEventListener('click', event =>alert('Hello world Node js') )

`;

http
  .createServer((request, response) => {
    // create server ise server yardanmaq ucun httpinin metodudur

    switch (request.url) {
      case '/':
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(html);
      case '/app.css':
        response.writeHead(200, { 'Content-Type': 'text/css' });
        response.end(css);
      case '/app.js':
        response.writeHead(200, { 'Content-Type': 'text/javascript' });
        response.end(js);
      default:
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('404 Not Found');
    }
  })
  .listen(9000, () => console.log('server isdiyir'));
