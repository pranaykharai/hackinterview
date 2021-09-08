import React ,{ useState } from 'react'
import { useHistory } from "react-router-dom";
import './css/header.css';
export const AddNew = () => {
    const [ title ,setTitle] = useState('');
    const [ body , setBody ] = useState('');
    const [ author, setAuthor] = useState('');
    const [ isPending , setIsPending ] =  useState(false);
    const history = useHistory();
    const handleSubmit=(e)=>{
            e.preventDefault();
            const blog = { title , body , author }
            setIsPending(true);
            fetch('http://localhost:8000/blogs',{
                method:'POST',
                headers:{"content-type" : "application/json"},
                body:JSON.stringify(blog)
            }).then(()=>{
                console.log("new blog added");
                setIsPending(false);
                history.push('/BlogList');
            })
    }
    return (

        <>
        <div className=" create">
            <form onSubmit={handleSubmit}>
                
                <label className="text-3xl font-semibold" >Title</label>
                <input type="text" 
                required
                value = {title}
                placeholder="company name, job profile and on campus /off campus details"
                onChange = {(e)=> setTitle(e.target.value)}
                />
                <label className="text-3xl font-semibold mt-6">Write Here</label>
                <textarea className="w-5/6 h-5/6" required rows="40" cols="50"
                   value = {body}
                   onChange = {(e)=> setBody(e.target.value)}
                > </textarea>
                <label className="text-3xl  mt-10 font-semibold">Author</label>
                <input type="text" 
                required
                value = {author}
                onChange = {(e)=> setAuthor(e.target.value)}
                />
                 { !isPending && <button className="text-3xl font-semibold border px-3 rounded my-5 bg-red-200">Upload</button>}  
                 { isPending && <button className="text-3xl font-semibold border px-3 rounded my-5 bg-red-200" disabled>uploading</button>}  

            </form>
        </div>
        </>
    )
}
