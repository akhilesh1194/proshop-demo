import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = ({product}) => {
    return (
        <>
            <Card className="my-3 p-3 rounded product-card text-center" style={{ width: '250px', height: '350px' }}>
                <Link to={`/product/${product._id}`}>
                    <Card.Img src={product.image} variant="top" />
                </Link>
                <Card.Body>
                    <Link to={`/product/${product._id}`}>
                        <Card.Title as="div">
                            <strong>{product.name}</strong>
                        </Card.Title>
                    </Link>

                    <Card.Text as='h3'>
                        Rs {product.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Products;
// Code snippet from Footer.jsx
//     )
// }