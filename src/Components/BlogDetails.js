import { useParams } from "react-router";
import useFetch from './useFetch';
const BlogDetails = () => {
    const{ id } = useParams();
    const { data :blog , error , isPending } = useFetch('http://localhost:8000/blogs/' + id);
return (
    <div className="container">
        { isPending && <div>Loading..</div>}
        { error && <div>{error}</div>}
        { blog && 
        <article className = "container w-11/12 mx-auto">
            <p className="text-4xl py-3">{blog.title}</p>
            <p className="text-xl ">written by {blog.author}</p>
            <div className="my-10 w-5/6 text-xl leading-loose py-3">
                {blog.body}
            </div>
        </article>

        }
    </div>
);
}
export default BlogDetails;