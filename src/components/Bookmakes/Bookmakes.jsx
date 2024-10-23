import PropTypes  from "prop-types";
import Bookmark from "../Bookmark/Bookmark";


const Bookmakes = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-5 pt-5">
            <h2 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length}</h2>
          {
             bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
          }
        </div>
    );
};

Bookmakes.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmakes;
// {
//     bookmarks.map(bookmarks => <Bookmark key={bookmarks.id} bookmarks={bookmarks}></Bookmark>)
// }