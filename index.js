import { env } from 'node:process';
import hapi from '@hapi/hapi';
import nextServer from 'next';
import portType from 'port-type';
import joi from 'joi';

const provision = async (option) => {
    const app = nextServer({ dev : env.NODE_ENV === 'development' });
    const handle = app.getRequestHandler();

    const config = joi.attempt(option, joi.object().required().keys({
        port : joi.number().optional().port().default(portType.haveRights(80) ? 80 : 3000)
    }));

    const server = hapi.server({
        debug : {
            log     : ['error'],
            request : ['error']
        },
        host : 'localhost',
        port : config.port
    });

    server.route({
        method : 'GET',
        path   : '/_next/{anything*}',
        async handler({ raw, url }, h) {
            await handle(raw.req, raw.res, url);
            return h.close;
        }
    });
    server.route({
        method : 'GET',
        path   : '/blog/{postId}',
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

export default provision;
