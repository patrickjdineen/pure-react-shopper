import React from 'react';
import PropTypes from 'prop-types'
import Item from './Item';
import './CartPage.css';

function CartPage ({ items, onAddOne, onRemoveOne }){
    
    function getTotal(){
        let total=0;
        for (let i =0; i<items.length;i++){
            total+= items[i].count * items[i].price
        } return total
    };
    

    return(
        items.length ===0 ? 
        <div>You currently don't have any items in your cart</div>
        :
        <div> 
        <ul className='CartPage-items'>
            {items.map(item=>
                <li key={item.id} className='CartPage-item'>
                    <Item item={item}>
                        <div className='CartItem-controls'>
                            <button
                            className='CartItem-removeOne'
                            onClick={()=> onRemoveOne(item)}>
                                &ndash;
                            </button>
                            <span className='CartItem-count'>{item.count}</span>
                            <button
                            className='CartItem-addOne'
                            onClick={()=>onAddOne(item)}>+</button>
                        </div>
                    </Item>
                </li>
                )}
        </ul>
        <div className='Cart-total'>Your For Loop Total is...{getTotal(items)}</div>
        <div classNAme='Cart-total'>Your reduce total is {items.reduce((sum, item) => sum+(item.price*item.count),0)}</div>
        </div>
    );
}

CartPage.propTypes = {
    items:PropTypes.array.isRequired,
    onAddOne:PropTypes.func.isRequired,
    onRemoveOne:PropTypes.func.isRequired
};

export default CartPage
