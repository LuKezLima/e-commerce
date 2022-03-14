import * as C from './GlobalStyles'
import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'

import { FormProvider } from './contexts/CurrentCartContext'
import { FormProvider as ProviderCart } from './contexts/CartContex'
import { FormProvider as ProviderActiveMenu } from './contexts/ActiveMenuContext'
import {GlobalStyle} from './GlobalStyles';

import {useActive} from './contexts/ActiveMenuContext'

function App() {
  const {stateActive} = useActive()

  return (
   
    <FormProvider>
        
      <ProviderCart>
      <C.GlobalWrapper active={stateActive.active}/>
        <GlobalStyle active={stateActive.active}/>
       
        <C.MainContainer>
          <C.MainWrapper>
            <Header />
            <Main />
          </C.MainWrapper>
        </C.MainContainer>
       
      </ProviderCart>
    </FormProvider>
    
  );
}

export default App;
