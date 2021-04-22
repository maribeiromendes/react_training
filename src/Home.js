import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/blogs')
        .then(res => res.json())
        .then(data => {
            setBlogs(data)
        })
    }, []);

    return ( 
        <div className="home">
             { blogs && <BlogList blogs={blogs} title="All blogs!"/> }
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mari') } title="Mari's blogs!"/> */}
        </div>
     );
}
 
export default Home;