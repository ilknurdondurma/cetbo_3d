import React, { useState } from 'react'
import { blogsData } from '../../fakeAPI/blogs';

function Blog() {
  const [blogs] = useState(blogsData);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleCloseDetail = () => {
    setSelectedBlog(null);
  };

  return (
    <div className='w-4/5 sm:w-full md:w-full mx-auto'>
      <h1 className='text-3xl font-medium m-4'>3D Baskı Hakkında  </h1>
      {selectedBlog ? (
        <BlogDetail blog={selectedBlog} onClose={handleCloseDetail} />
      ) : (
        <div className='grid grid-cols-4 gap-4'>
          {blogs.map((blog, index) => {
            const alignmentClass = (index % 2 === 0) ? 'col-start-1 col-span-3 sm:col-span-4' : 'col-start-2 col-span-3 sm:col-span-4';
            return (
              <div key={blog.id} className={`${alignmentClass}`} onClick={() => handleBlogClick(blog)}>
                <div className='border-2  p-5 shadow-lg cursor-pointer'>
                  <h2 className='text-xl font-medium'>{blog.title}</h2>
                  <div className='grid grid-cols-4 gap-5'>
                    <img src={`data:image/jpeg;base64, ${blog?.imageUrl}`} alt={blog.title} className="col-span-1 h-full flex flex-col justify-center object-contain rounded-xl items-center" />
                    <p className='col-span-3 line-clamp-6'>{blog.content}</p>
                    <p className='text-red-600'>devamı..</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Blog


function BlogDetail({ blog, onClose }) {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 overflow-y-scroll">
      <div className="bg-white p-8 m-4 rounded-lg shadow-lg max-w-3xl w-full h-full overflow-auto">
        <img
          src={`data:image/jpeg;base64, ${blog.imageUrl}`}
          alt={blog.title}
          className="mb-4 w-full h-auto object-contain rounded-lg"
          style={{ maxHeight: '80vh' }} // Adjust max height as per your requirement
        />
        <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
        <p>{blog.content}</p>
        <button onClick={onClose} className="mt-4 p-2 bg-blue-500 text-white rounded">Close</button>
      </div>
    </div>
  );
}
