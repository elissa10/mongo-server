var mongoose = require('mongoose');
var Schema = mongoose.Schema;

bookSchema = new Schema( {
	unique_id: Number,
	title: String,
	content: String,
	author: String,
    imagePath: String,
	createdAt: {
        type: Date,
        default: Date.now
    }
}),
Book = mongoose.model('Book', userSchema);

module.exports = Book;