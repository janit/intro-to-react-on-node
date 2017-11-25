import * as React from 'react';

export default (props) => {
  return <html>
    <head>
      <title>{props.title}</title>
    </head>
    <body>
    <header>My site</header>
    <main>{props.children}</main>    
    <footer>footer</footer>
    </body>
  </html>
}
