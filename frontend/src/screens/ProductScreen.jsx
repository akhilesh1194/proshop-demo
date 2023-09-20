import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const ProductScreen = () => {

    const {id: productId} = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [qty, setQty] = useState(1);

    const {data: product, isLoading, isError: error} = useGetProductDetailsQuery(productId);

    const addToCartHandler = () => {
        dispatch(addToCart({ ...product , qty }));
        navigate("/cart");
    }

    return (
        <>
            <Link className="btn btn-light my-3" to="/">
                Go Back
            </Link>
            {isLoading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <div>{ error?.data?.message || error.error || error.toString() }</div>
            ) : (
                <>
                    <Row>
                        <Col md={5}>
                            <Image src={product.image} alt={product.name} fluid />
                        </Col>
                        <Col md={4}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h3>{product.name}</h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Description: {product.description}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={3}>
                            <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Price:
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <strong>Rs {product.price} / 500 gms</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Qty:
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Control 
                                                as="select" 
                                                value={qty} 
                                                onChange={(e) => setQty(Number(e.target.value))}>
                                                    {[...Array(5).keys()].map(x => (
                                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                    ))}
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button 
                                        className="btn-block" 
                                        type="button"
                                        onClick={addToCartHandler}
                                    >
                                        Add to Cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </>
            ) }
        </>
    )
}

export default ProductScreen;
