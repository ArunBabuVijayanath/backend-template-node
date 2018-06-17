const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogCommentsScheme = mongoose.Schema({
    authorName: {
      "type": String,
      "required": true,
      "default": "Anonymous"
    },
    comment: {
      "type": String,
      "required": true
    },
    email: {
      "type": String,
      "required": true
    },
    postId: {
      "type": Schema.Types.ObjectId,
      ref: 'BlogPost'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('BlogComment', BlogCommentsScheme);
