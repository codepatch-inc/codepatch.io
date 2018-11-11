'use strict';

const hapi = require('hapi');
const next = require('next');

const app = next({ dev : process.env.NODE_ENV === 'development' });
const handle = app.getRequestHandler();

const server = hapi.server({
    host : 'localhost',
    port : 3000
});

server.route({
    method  : 'GET',
    path    : '/_next/{anything*}',
    async handler({ raw, url }, h) {
        await handle(raw.req, raw.res, url);
        return h.close;
    }
});
server.route({
    method  : 'GET',
    path    : '/blog/{postId}',
    async handler({ raw, query, params }) {
        return app.renderToHTML(raw.req, raw.res, '/post', {
            ...query,
            ...params,
            id : params.postId
        });
    }
});
server.route({
    method : 'GET',
    path   : '/{anything*}',
    async handler({ raw, path, query }) {
        return app.renderToHTML(raw.req, raw.res, path, query);
    }
});

app.prepare()
    .then(() => {
        return server.start();
    })
    .catch((error) => {
        console.error(error.stack);
        process.exit(1);
    });
