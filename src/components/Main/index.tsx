import * as C from './styles'


import { ReactComponent as PlusIcon} from '../../assets/icon-plus.svg'
import { ReactComponent as MinusIcon} from '../../assets/icon-minus.svg'
import { ReactComponent as NextIcon} from '../../assets/icon-next.svg'
import { ReactComponent as PreviousIcon} from '../../assets/icon-previous.svg'

import { ReactComponent as CartIcon} from '../../assets/icon-cart-white.svg'
import { DefaultButton } from '../../GlobalStyles'

import {Products} from '../../data/Products'

import {useForm, CartActions as CurrentCartActions} from '../../contexts/CurrentCartContext'
import {useForm as useCard, CartActions} from '../../contexts/CartContex'
import { useEffect, useState } from 'react'

import {useActive,CartActions as CartActionsActive } from '../../contexts/ActiveMenuContext'


export const Main = () =>{
    const ImagesProduct = [
        {big:Products[0].images.imageProduct1, thumb:Products[0].images.imageProduct1_thumb},
        {big:Products[0].images.imageProduct2, thumb:Products[0].images.imageProduct2_thumb},
        {big:Products[0].images.imageProduct3, thumb:Products[0].images.imageProduct3_thumb},
        {big:Products[0].images.imageProduct4, thumb:Products[0].images.imageProduct4_thumb},
      
    ]


    const {state, dispatch} = useForm()
    const [nextImage, setNextImage] = useState(0)
    const [changeBigImage, setChangeBigImage] = useState(ImagesProduct[nextImage].big)
    const [indexImageActived,setIndexImageActived] = useState(1)
   
    const {dispatchActive, stateActive} = useActive()


    const stateCard = useCard()
    

    const handleIncreaseQuantifyItems = () =>{
            dispatch({
                type: CurrentCartActions.setQuantify,
                payload: state.quantify + 1
            })
    }

    const handleDecreaseQuantifyItems = () =>{
            dispatch({
                type: CurrentCartActions.setQuantify,
                payload: state.quantify === 1 ? state.quantify : state.quantify - 1
            })
    }

    const handleAddToCart = () =>{
       
            stateCard.dispatch({
                type: CartActions.setCard,
                payload: stateCard.state.Card.push(state)
            })

    }

    const handleChangeImage = (product:string, key:number) =>{
        setChangeBigImage(product)
        
        setIndexImageActived(key + 1)
    } 

    const handleNextImage = () =>{
        nextImage === 3 ? setNextImage(3) : setNextImage(nextImage + 1)
      
    

    }


    const handlePreviousImage = () =>{
        nextImage === 0 ? setNextImage(0) : setNextImage(nextImage - 1)

    }

    useEffect((()=>
    setChangeBigImage(ImagesProduct[nextImage].big)
    ),[nextImage])
   
   
    return(
      <C.Main>
          <C.GalleryProduct actived={indexImageActived} >
                
                    <div className="roundedBox" onClick={handlePreviousImage} id='previousIcon' >
                    <PreviousIcon />
                    </div>

                    <div className="roundedBox" onClick={handleNextImage} id='nextIcon'>
                    <NextIcon />
                    </div>
                   
                   
                    
                <img id='imageBig' src={changeBigImage} alt="imageProduct"/>
               
              <div className="thumbNailImages">
                    {ImagesProduct.map((product, key)=>
                        (
                            
                            <C.ThumbImage key={key} actived={key} onClick={() => handleChangeImage(product.big, key)} src={product.thumb} alt="imageProductThumb" />
                           
                            
                        )
                    )}
              </div>
          </C.GalleryProduct>
          <C.ProductInfo>
              
              <p className='sneakersBrand'>{Products[0].brand}</p>
              <h2>{Products[0].name}</h2>
              <p className='paragraph'>{Products[0].description}</p>

              <div className="productPriceOffer">
                <h3>${Products[0].discount !== undefined ? (Products[0].price * Products[0].discount).toFixed(2) : Products[0].price.toFixed(2)}</h3>

                {Products[0].discount !== undefined &&
                (
                    <div className="discountWrapper">
                        <p>{Products[0].discount * 100}%</p>
                     </div>   
                
                )}
                    
            </div>
            <p id='oldPrice'>${Products[0].price.toFixed(2)}</p>
           


                            <div className="addCartWrapper">
                                <div className="numberItens">
                                  <MinusIcon onClick={handleDecreaseQuantifyItems}/>
                                        <p>{state.quantify}</p>
                                    <PlusIcon onClick={handleIncreaseQuantifyItems}/>
                                </div>
                                <DefaultButton onClick={handleAddToCart}> <CartIcon/>Add to cart</DefaultButton>
                            </div>

          </C.ProductInfo>

      </C.Main>  
    )
}