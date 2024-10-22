import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog , handleAddToBookmark}) => {
  const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
  return (
    <div className='mb-20'>
      <img className='w-full mb-8' src={cover} alt="" />
      <div className='flex justify-between mb-4'>
        <div className='flex'>
          <img className='w-14' src={author_img} alt="" />
          <div className='ml-6'>
            <h3 className='text-2xl'> {author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>

        <div>
          <span>{reading_time} min read</span>
          <button
          onClick={handleAddToBookmark}
            className='ml-2 text-2xl'
          ><CiBookmark /></button>
        </div>
      </div>
      <h4 className="text-4xl">{title}</h4>
      <p>
        {
          hashtags.map((hash, idx) => <span
            key={idx}>
            <a href="">#{hash} </a></span>)
        }
      </p>
    </div>
  );
};

Blog.propTypes = {
  Blog: PropTypes.object.isRequired
};

export default Blog;