module.exports = (app) => {
    const comments = require('../controllers/blog-comments.controller.js');

    // Create a new Note
    app.post('/comments', comments.create);

    // Retrieve a single Note with noteId
    app.get('/comments/:postId', comments.findOne);

    // // Retrieve all Notes
    // app.get('/posts', posts.findAll);
    //


    // // Update a Note with noteId
    // app.put('/posts/:postId', posts.update);
    //
    // // Delete a Note with noteId
    // app.delete('/posts/:postId', posts.delete);
}
