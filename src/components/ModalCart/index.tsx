import { DefaultButton } from '../../GlobalStyles'
import * as C from './styles'
import {useForm} from '../../contexts/CartContex'
import { CartItem } from '../CartItem'

import {useActive} from '../../contexts/ActiveMenuContext'

interface Props {
    activeModal: boolean
}

export const ModalCart: React.FC<Props> = ({activeModal}) => {
    const {state, dispatch} = useForm()
    const {stateActive} = useActive()

    return(
        <C.Container activeModal={activeModal} activeMenu={stateActive.active}>
                <h3>Cart</h3>
                <hr/>
                {state.Card.length > 0 ? (
                    <>
                    {state.Card.map((item, key) =>
                        (
                            <CartItem key={key} index={key} idItem={item.idItem} quantify={item.quantify} />
                        )
                    )}
                
                    <DefaultButton>Checkout</DefaultButton>
                    </>
                    
                    
                ): (
                    <p>Your cart is empty</p>
                )}
                
        </C.Container>
    )
}
