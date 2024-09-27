/**
 * Creates a web server.
 */
const express = require('express');
const app = express();
const port = 3000;

/**
 * Returns a list of comments.
 */
app.get('/comments', (req, res) => {
  res.send([
    {
      id: 1,
        text: 'Hello, world!',
    },
    {
      id: 2,
      text: 'This is a comment.',
    },
    ]);
}
);


