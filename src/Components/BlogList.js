import React from 'react'
import './css/header.css';
import { Link } from 'react-router-dom';
export const BlogList = ({blogs,title}) => {
    
    return (
        <div className="center w-11/12">
            <h1 className="px-20 text-5xl text-gray-500">{title}</h1>
            {blogs.length === 0 ? "No blogs to show" : 
            blogs.map((blog)=>(

                <div className="  center md:w-4/5 w-11/12 h-50 border border-blue-100 hover:border-blue-500 " key ={blog.id}>
                  <Link to={`/blogs/${blog.id}`}>
                  <h1 className="pt-2 pl-3 font-semibold text-2xl ">{blog.title}</h1>
                    <p className="py-2 pl-3 ">written by {blog.author}</p>
                  </Link>
                </div>
            ))}
        </div>
    )
}
