import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddBookmark}) => {
    const {title, cover, author, posted_data, author_img, reading_time, hashtags} = blog;
    return (
        <div>
            <img className='w-full my-8 rounded-xl' src={cover} alt={`Cover picture of the title ${title}`} />
          <div className='flex justify-between items-center mb-4'> 
                 <div className='flex gap-6'>
                 <img className='w-14' src={author_img} alt="" />
                 <div>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_data}</p>
                 </div>
                 </div>
                 <div className='flex items-center'>
                <span>{reading_time} main read</span>
                <button
                 onClick={() => handleAddBookmark(blog)}
                className='ml-2 text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                 </div>
          </div>
          <h2 className='text-4xl'>{title}</h2>
          <p>
                    {
                     hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                    }
                </p>
        </div>

    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func
}

export default Blog;