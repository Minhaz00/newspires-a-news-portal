import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Leftnav.css';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://newspires-server.vercel.app/news-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div>
            <h4>All categories</h4>
            <div className='d-flex  align-content-start flex-wrap d-lg-block categories'>
                {
                    categories.map(category => <p key = {category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;