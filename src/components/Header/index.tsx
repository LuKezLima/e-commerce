import * as C from './styles'
import {ReactComponent as LogoIcon} from '../../assets/logo.svg'
import {ReactComponent as IconCart} from '../../assets/icon-cart.svg'
import {ReactComponent as IconMenu} from '../../assets/icon-menu.svg'
import {ReactComponent as IconClose} from '../../assets/icon-close.svg'
import imageAvatar from '../../assets/image-avatar.png'
import { ModalCart } from '../ModalCart'
import { useState } from 'react'

import {useForm} from '../../contexts/CartContex'
import {CartActions, useActive} from '../../contexts/ActiveMenuContext'

export const Header: React.FC = () =>{
 const [modalCart, setModalCart] = useState(false)
 const [activeMenuHamburguer, setActiveMenuHamburguer] = useState(false)
 const {stateActive, dispatchActive} = useActive()
 
 const {state} = useForm()

    const handleOpenCart = () =>{
        setModalCart(!modalCart)
    }

    const handleOpenMenuHamburguer = () => {
        dispatchActive({
            type: CartActions.setTrue,
            payload: true
        })
    }
    const handleCloseMenuHamburguer = () => {
        dispatchActive({
            type: CartActions.setTrue,
            payload: false
        })
    }

    return(
        <C.Header active={stateActive.active}>
           <IconMenu id='menuHamburguer' onClick={handleOpenMenuHamburguer} />
                     <nav>
                     <LogoIcon className='img-logo' /> 
                
                        <ul  >
                                <IconClose id='iconClose' onClick={handleCloseMenuHamburguer}/>
                                <li> <a href="#">Collections</a></li>
                             <li><a href="#">Men</a> </li>
                             <li><a href="#">Women</a> </li>
                              <li> <a href="#">About</a></li>
                              <li> <a href="#">Contact</a> </li>
                         </ul>
                     </nav>
        
            

            <C.WrapperCartProfile>
                <div id='WrapperCart' onClick={handleOpenCart}>
                <IconCart>
                </IconCart>
                <div className='ItemInCart'>
                    <p>{state.Card.length}</p>
                </div>

                </div>
               
                <img src={imageAvatar} alt="profile_image"/>
            </C.WrapperCartProfile>

            <ModalCart activeModal={modalCart}>
                
            </ModalCart>

        </C.Header>
    )
}

