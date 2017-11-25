import * as Koa from 'koa';
const app = new Koa();

import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import HelloWorld from './views/HelloWorld';

let name = 'Barbara';

app.use(async ctx => {
  ctx.body = ReactDOMServer.renderToStaticMarkup(<HelloWorld name={name} />);
});

app.listen(3000);
