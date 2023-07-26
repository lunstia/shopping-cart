import { PropTypes } from 'prop-types'; 

export default function Card({ product }) {
    return (
        <div>
            <h3>{product.title}</h3>
            <img src={product.image}/>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    );
}

Card.propTypes = {
    product: PropTypes.object,
}
