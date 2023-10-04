#!/usr/bin/env node

import 'throw-rejects/register.js';
import chalk from 'chalk';
import open from 'open';
import rootCheck from 'root-check';
import handleQuit from 'handle-quit';
import meow from 'meow';
import server from './index.js';

const { bold } = chalk;
const cli = meow(`
    Usage
      $ codepatch

    Option
      --port        Port number to listen on for HTTPS requests
      --open        Open the homepage in your browser
      --open=<url>  Open a specific page in your browser

    Example
      $ codepatch
      ${bold.cyan('CodePatch ready')} ${bold.grey('at')} ${bold.yellow('http://localhost:3000')}
      $ codepatch --port=7000
      ${bold.cyan('CodePatch ready')} ${bold.grey('at')} ${bold.yellow('http://localhost:7000')}
`, {
    importMeta : import.meta
});

const serverOption = { ...cli.flags };
delete serverOption.open;

const app = await server(serverOption);

handleQuit(() => {
    app.stop();
});

await app.start();

// Attempt to set UID to a normal user now that we definitely
// do not need elevated privileges.
rootCheck();

console.log(
    bold.cyan('CodePatch ready'),
    bold.grey('at'),
    bold.yellow(app.info.uri)
);

const page = cli.flags.open;
if (page) {
    open(app.info.uri + '/' + (page === true ? '' : page));
}
