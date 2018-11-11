#!/usr/bin/env node

'use strict';

require('throw-rejects')();

const { bold } = require('chalk');
const open = require('opn');
const rootCheck = require('root-check');
const handleQuit = require('handle-quit');
const cli = require('meow')(`
    Usage
      $ codepatch

    Option
      --port        Port number to listen on for HTTPS requests
      --open        Open the homepage in your browser
      --open=<url>  Open a specific page in your browser

    Example
      $ codepatch
      ${bold.cyan('Codepatch ready')} ${bold.grey('at')} ${bold.yellow('http://localhost:3000')}
      $ codepatch --port=7000
      ${bold.cyan('Codepatch ready')} ${bold.grey('at')} ${bold.yellow('http://localhost:7000')}
`);

const server = require('.');

const serverOption = { ...cli.flags };
delete serverOption.open;

server(serverOption).then(async (app) => {
    handleQuit(() => {
        app.stop();
    });

    await app.start();

    // Attempt to set UID to a normal user now that we definitely
    // do not need elevated privileges.
    rootCheck();

    console.log(
        bold.cyan('Codepatch ready'),
        bold.grey('at'),
        bold.yellow(app.info.uri)
    );

    const page = cli.flags.open;
    if (page) {
        open(app.info.uri + '/' + (page === true ? '' : page));
    }
});
