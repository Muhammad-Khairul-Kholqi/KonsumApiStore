import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AllProducts = () => {
    const url = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState([]);

    const getDataProducts = async () => {
        const response = await fetch(url);
        const dataProduct = await response.json();
        setProducts(dataProduct);
    }

    useEffect(() => {
        getDataProducts();
    })

    return(
        <div className="container">
            <div className = "row grid gap-3" >
                {products.map((produk) => {
                    return(
                        <div className="col-3">
                            <CardProducts 
                                key={produk.id}
                                title={produk.title}
                                price={produk.price}
                                description={produk.description}
                                image={produk.image}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function CardProducts(props) {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} className="w-50 h-50" />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    );
}


export default AllProducts;