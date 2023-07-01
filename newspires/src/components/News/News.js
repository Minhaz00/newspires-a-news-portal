import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    const { category_id, title, author, details, image_url, total_view, rating } = news;
    return (
        <div>
            <Card>
                <Card.Img src={image_url} />
                <Card.Body>
                    <Card.Header>
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle className=" mb-0 text-muted d-flex justify-content-between">
                            <p className='mb-0'><small>Author: {author.name} </small></p>
                            <p className='mb-0'><small>Views: {total_view}  </small></p>
                            <p className='mb-0'><small>Ratings: {rating.number} </small></p>
                        </Card.Subtitle>
                    </Card.Header>
                    <Card.Text>
                    {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="outline-primary">See similar news</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;