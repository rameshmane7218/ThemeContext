// driver 
// 1. Connect db
// models, 
// Schemas - structure of document

// const UserSchema = new mongoose.Schema({name: "String"});
const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    author: {type: 'string', required: true },
    title: String,
    createdAt: Date,
    content: String,
    tags: [String],
});

const Blog = mongoose.model("blog", BlogSchema);


async function main() {
    const conn = await mongoose.connect('mongodb://localhost:27017/website');
    console.log("Connected to MongoDB");
    
    // const blog = new Blog({
    //     author: "Jack Doe",
    //     title: "Redux from scratch",
    //     createdAt: new Date(),
    //     content: "Redux is good",
    //     tags: ["redux","db"]
    // });

    // await blog.save();

    const blog = await Blog.find({author: "Jack Doe"});
    // console.log(blog);

    const x = await Blog.find().sort({title: -1});
    console.log('x:', x)

    conn.disconnect();
}   

main();