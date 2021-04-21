import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum dolor sit amet...', author: 'mariana', id: 1},
        {title: 'My new website', body: 'lorem ipsum dolor sit amet...', author: 'mariana', id: 2},
        {title: 'My new website', body: 'lorem ipsum dolor sit amet...', author: 'mari', id: 3},
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
    }, []);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mari') } title="Mari's blogs!"/>
        </div>
     );
}
 
export default Home;