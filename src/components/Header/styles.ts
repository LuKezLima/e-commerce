import styled from "styled-components";

export const Header = styled.header<{active:boolean}>`
    width: 100%;
    height: clamp(4rem,7vw + .3rem,7rem);
    border-bottom: 2px solid #f0f0f0 ;
    box-shadow: 2px 5px 9px #f0f0f0 ;
    padding: 0 .8rem ;
    display: flex ;
    align-items: center;
    justify-content: space-between ;

    @media screen and (max-width: 970px) {
        justify-content: flex-start ;
        gap: 1rem;
        }
}

#menuHamburguer{
    display: none;
    cursor: pointer;
    @media screen and (max-width: 970px) {
        display: block;
    }
}

    nav{
        height: 100% ;
        display: flex ;
        align-items: center ;
        gap:  3rem ;
        .img-logo{
            max-width: 100% ; 
       
        }

       
        
    }

    ul{
        display: flex ;
        gap: 1rem ;
        align-items: center ;
        height: 100%;

        #iconClose{
            display: none;
            cursor: pointer;

            @media screen and (max-width:970px) {
                display: block;
                margin-left: .5rem;
            }
        }

        @media screen and (max-width: 970px) {
        display: none;
        }

        @media screen and (max-width: 970px) {
        background-color: #fff;
        z-index: 2000;
        position: absolute;
        left: 0;
        top: 0;
        padding: 1.5rem .7rem;
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
            height: auto;
            width: 60vw;
            gap: 3rem;
            padding-bottom: 3rem;
            display: ${props => props.active ? 'block' : 'none'};
            min-height: 100vh;

            li{
                width: 100%;
                margin-top: 2.5rem;
                margin-left: -.5rem;
            }

            li a{
                color: var(--Very-vark-blue);
                font-weight: bold;
                width: 100%;
                padding: .5rem 1rem;

            

            }
        }

    }

    ul li{
        height: 100% ;
        display: flex ;
        align-items: center ;
    }

    li a{
        padding: 0 .6rem ;
        height: 100% ;
        display: flex ;
        align-items: center;
        color: var(--text-paragraph) ;
        transition: all .2s ease ;
        font-size: var(--font-size-0) ;

        &:hover{
            border-bottom: 3px solid var(--Orange) ;
            color: var(--Very-vark-blue) ;
           
        }
    

`



export const WrapperCartProfile = styled.div`
    display: flex ;
    align-items: center ;
    gap: 2.4rem;
    justify-content: flex-end;
    
    img, svg{
        cursor: pointer;
    }

    img{
        width: 28%;
    }

    @media screen and (max-width: 970px) {
        position: absolute;
        right: 1rem;
    }

    #WrapperCart{

        .ItemInCart{
            padding: 1.7px 5px ;
            background-color:var(--Orange) ;
            position: absolute;
            margin-top: -2.1rem ;
            margin-left: .6rem ;
            font-size: var(--font-size--2) ;
            text-align: center ;
            border-radius: 50%;
            color: #fff;
            cursor: pointer;
            display: block;

            p{
                padding: 1px ;
            }
        }
    }

   

    img{
        max-width: 30%;
        border-radius: 50%;
        &:hover{
            border: 2px solid var(--Orange) ;
            margin-left:-1px ;
        }
       
    }
`