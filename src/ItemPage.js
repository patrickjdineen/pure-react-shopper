import React from 'react';
import PropTypes from 'prop-types';
import './ItemPage.css';
import Item from './Item'

function ItemPage({ items, onAddToCart }) {
    return (
        <ul classNAme='ItemPage-items'>
            {items.map(item =>
                <li key={item.id} className='ItemPage-items'>
                    <Item
                        item={item}
                        onAddToCart={()=>onAddToCart(item)}
                    />
                </li>    
                )}
        </ul>
    );
}
ItemPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddToCart:PropTypes.func.isRequired
};

export default ItemPage