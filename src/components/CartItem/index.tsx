import * as C from './styles'

import {State} from '../../contexts/CurrentCartContext'

import {ReactComponent as TrashIcon} from '../../assets/icon-delete.svg'

import { Products } from '../../data/Products'
import { useEffect, useState } from 'react'
import {useForm, CartActions} from '../../contexts/CartContex'

interface States {
    idItem:number | undefined;
    quantify:number;
    index: number
}

export const CartItem: React.FC<States> = ({idItem, quantify, index}) =>{

    const {state, dispatch}  = useForm()

    const [Product, setProduct] = useState({
        img_thumb:'',
        name:'',
        price: 0,
    })

    const setDataProduct = () =>{
        Products.forEach((i) => {
            if(i.id === idItem){
                setProduct({
                    img_thumb: i.images.imageProduct1_thumb,
                    name: i.name,
                    price: i.discount != undefined ? (i.price * i.discount) : i.price
                    })
            }
        })
    }

    const handleRemoveItem = () =>{
        dispatch({
            type: CartActions.setCard,
            payload: state.Card.splice(index,1)
        })
        
    }

    useEffect((
        setDataProduct
        
    ),[])

    return(
        <C.Container>
            <img src={Product.img_thumb} alt="product image" />
            <C.ResumeItemCart>
                <p>{Product.name}</p>
                <p >${Product.price.toFixed(2)} x {quantify} - <strong id='totalPrice'>${(Product.price * quantify).toFixed(2)}</strong> </p>
            </C.ResumeItemCart>
            <TrashIcon onClick={handleRemoveItem} />
        </C.Container>
    )
}