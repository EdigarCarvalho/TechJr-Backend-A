import * as http from 'http';

const host: string = 'localhost';
const port: number = 8080;

const requestListener: http.RequestListener = (req: http.IncomingMessage, res: http.ServerResponse) => {

    if (req.method === 'GET') {
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200); // status code
      res.end(JSON.stringify({ message: "Testing JSON response" }));
    
    } else {
       res.statusCode = 405; // Method Not Allowed
       res.setHeader("Content-Type", "application/json");
       res.end(JSON.stringify({ error: "Method Not Allowed" }));
      
    }

};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
