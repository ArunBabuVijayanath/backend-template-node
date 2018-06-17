const Comments = require('../models/blog-comments.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
  // Validate request
    if(!req.body.authorName) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a Note
    const comments = new Comments({
        authorName: req.body.authorName,
        comment: req.body.comment,
        email: req.body.email,
        postId: req.body.postId
    });

    // Save Note in the database
    comments.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Comments."
        });
    });
};
//
// // Retrieve and return all notes from the database.
// exports.findAll = (req, res) => {
//
//   BlogPost.find()
//     .then(blogPosts => {
//         res.send(blogPosts);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while retrieving notes."
//         });
//     });
//
// };
//
// // Find a single note with a noteId
exports.findOne = (req, res) => {

  Comments.find({"postId": req.params.postId})
   .then(comments => {
       if(!comments) {
           return res.status(404).send({
               message: "Note not found with id " + req.params.postId
           });
       }
       res.send(comments);
   }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "Note not found with id " + req.params.postId
           });
       }
       return res.status(500).send({
           message: "Error retrieving note with id " + req.params.postId
       });
   });

};
//
// // Update a note identified by the noteId in the request
// exports.update = (req, res) => {
//
//   // Validate Request
//    if(!req.body.content) {
//        return res.status(400).send({
//            message: "Note content can not be empty"
//        });
//    }
//
//    // Find note and update it with the request body
//    BlogPost.findByIdAndUpdate(req.params.postId, {
//        title: req.body.title || "Untitled Note",
//        content: req.body.content
//    }, {new: true})
//    .then(post => {
//        if(!post) {
//            return res.status(404).send({
//                message: "Note not found with id " + req.params.postId
//            });
//        }
//        res.send(post);
//    }).catch(err => {
//        if(err.kind === 'ObjectId') {
//            return res.status(404).send({
//                message: "Note not found with id " + req.params.postId
//            });
//        }
//        return res.status(500).send({
//            message: "Error updating note with id " + req.params.postId
//        });
//    });
//
// };
//
// // Delete a note with the specified noteId in the request
// exports.delete = (req, res) => {
//
//   BlogPost.findByIdAndRemove(req.params.postId)
//     .then(post => {
//         if(!post) {
//             return res.status(404).send({
//                 message: "Note not found with id " + req.params.postId
//             });
//         }
//         res.send({message: "Note deleted successfully!"});
//     }).catch(err => {
//         if(err.kind === 'ObjectId' || err.name === 'NotFound') {
//             return res.status(404).send({
//                 message: "Note not found with id " + req.params.postId
//             });
//         }
//         return res.status(500).send({
//             message: "Could not delete note with id " + req.params.postId
//         });
//     });
//
// };
