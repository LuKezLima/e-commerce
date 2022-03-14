import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle<{active:boolean}>`

:root{
//PRIMARY COLORS:    
--Orange: hsl(26, 100%, 55%);
--Orange-Hover: hsl(26, 100%, 66%);
--Pale-Orange: hsl(25, 100%, 94%);

// SECONDARY COLORS:
--Very-vark-blue: hsl(220, 13%, 13%);
--Dark-grayish-blue: hsl(219, 9%, 45%);
--Grayish-blue: hsl(220, 14%, 75%);
--Light-grayish-blue: hsl(223, 64%, 98%);
--White: hsl(0, 0%, 100%);
--Black: hsl(0, 0%, 0%);
--text-paragraph: #a1a1a1;

// FONT-SIZES:
--font-size--2: clamp(0.6rem, 0.10vw + 0.58rem, 0.78rem);
--font-size--1: clamp(0.8rem, 0.14vw + 0.77rem, 0.89rem);
--font-size-0: clamp(1rem, 0.22vw + 0.93rem, 1.19rem);
--font-size-1: clamp(1.25rem, 0.5vw + 1.13rem, 1.58rem);
--font-size-2: clamp(1.56rem, 0.82vw + 1.37rem, 2.11rem);
--font-size-3: clamp(1.95rem, 1.29vw + 1.65rem, 2.81rem);
--font-size-4: clamp(2.44rem, 1.96vw + 1.98rem, 3.75rem);
--font-size-5: clamp(3.05rem, 2.92vw + 2.37rem, 5rem);
}

*{
    margin:0 ;
    padding:0 ;
    box-sizing: border-box ;
}

body{
    font-size:var(--font-size-0) ;
    overflow-y: ${props => props.active ? 'hidden': 'auto'};
}

a, li{
    text-decoration: none;
    list-style: none;
}



`


export const MainContainer = styled.div`
    max-width: 1440px;
    margin: 0 auto ;
    display: flex ;
    justify-content: center ;
   
`

export const GlobalWrapper  = styled.div<{active:boolean}>`
position: absolute;
min-width: 100vw;
min-height: 100vh;
display:${props => props.active ? 'block' : 'none'};
background-color:black;
opacity:${props => props.active ? .8 : 1};
z-index: 1000;
`

export const MainWrapper = styled.div`
    width:90%;
    min-height: 100vh;
    display: flex ;
    flex-direction: column ;
    max-width: 1440px;
    position: absolute;

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`

export const DefaultButton = styled.button`
padding: 1rem;
            border-radius: .6rem ;
            background-color:var(--Orange);
            border: 0 ;
            outline: none ;
            color:#fff ;
            font-weight: 700;
            font-size:var(--font-size-0) ;
            cursor: pointer;

            &:hover{
                background-color: var(--Orange-Hover)
            }
`

