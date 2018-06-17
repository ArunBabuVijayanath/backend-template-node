const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostScheme = mongoose.Schema({
    title: {
      "type": String,
      "required": true,
      "default": "Post Title"
    },
    content: String,
    comments: [{ type: Schema.Types.ObjectId, ref: 'BlogComment' }]
}, {
    timestamps: true
});

module.exports = mongoose.model('BlogPost', BlogPostScheme);
