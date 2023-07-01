import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './NewsSummary.css';
import { FaBookmark, FaShareNodes, FaEye, FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({ news }) => {
    const { _id, title, author, details, image_url, total_view, rating } = news;
    return (
        <div className='mb-4'> 
            <Card>
                <Card.Header>
                    <div className="d-flex justify-content-between">
                        <div className="author-details d-flex align-items-center">
                            <img className='m-0' src={author.img} alt="" />
                            <div className='mb-0 mt-2 ms-2'>
                                <h6 className='mb-0'><small>{author.name}</small></h6>
                                <p><small>{author.published_date}</small></p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <FaBookmark className='me-2'></FaBookmark>
                            <FaShareNodes className='me-2'></FaShareNodes>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img src={image_url} alt="Card image" />
                    <Card.Text>
                        {
                            details.length > 200 ? 
                                <p>{details.slice(0, 200) + "..." } <Link to={`/news/${_id}`}>View details</Link></p>
                                :
                                <p>{details}</p>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer  className='d-flex justify-content-between'>
                    <div>
                        <FaEye></FaEye>{"  "}
                        {total_view}
                    </div>
                    <div>
                        <FaStar></FaStar>{" "}
                        {rating.number}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;