'use strict';

const hapi = require('hapi');
const nextServer = require('next');
const portType = require('port-type');
const joi = require('joi');

const provision = async (option) => {
    const app = nextServer({ dev : process.env.NODE_ENV === 'development' });
    const handle = app.getRequestHandler();

    const config = joi.attempt(option, {
        port : joi.number().integer().min(0).max(65535).default(portType.haveRights(80) ? 80 : 3000)
    });

    const server = hapi.server({
        debug : {
            log     : ['error'],
            request : ['error']
        },
        host : 'localhost',
        port : config.port
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

    await app.prepare();

    return server;
};

module.exports = provision;
