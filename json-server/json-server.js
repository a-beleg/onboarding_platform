const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const rewriter = jsonServer.rewriter({
    '/profile/*': '/$1',
    '/university/*': '/$1',
    '/university/*/*': '/$1/$2',
    '/users/*': '/$1',
    '/vacancies/*': '/$1',
    '/events/*': '/$1',
    '/courses/*': '/$1',
    '/banners/*': '/$1',
    '/results/*': '/$1',
});

server.use(middlewares);
server.use(rewriter);
server.use(router);

const port = 3030;
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});

