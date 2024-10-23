import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleAddBookmark, handleMarkAsRed}) => {

    const [blogs, setBlogs] = useState([]);

     useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
     }, [])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Bookes: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddBookmark={handleAddBookmark} handleMarkAsRed={handleMarkAsRed}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmark: PropTypes.func,
    handleMarkAsRed: PropTypes.func
}

export default Blogs;