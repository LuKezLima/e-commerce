import styled from "styled-components";

export const Main = styled.main`
  width: 97%;
  display: flex;
  align-items: flex-start;
  margin: 4rem 0;
  gap: 3rem;

  > * {
    user-select: none;
  }

  @media screen and (max-width: 970px) {
    flex-direction: column;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0 0 2rem 0;
  }
`;

export const GalleryProduct = styled.div<{
  actived: number;
}>`
    flex: 1;
    display: flex ;
    flex-direction: column ;
    justify-content: center ;
    align-items:center ;
    gap:1.5rem ;
    


    @media screen and (max-width: 970px) {
     flex-direction: row;
    }

    img{
        cursor: pointer;

        &:hover{
            opacity: .6;
        }
    }

    #imageBig{
        max-width: 85% ;
        border-radius:.7rem ;
        cursor: default;

        @media screen and (max-width: 970px) {
            max-width: 60% ;
            margin-left: 1rem;
    }

    @media screen and (max-width: 600px) {
        max-width: 100%;
        margin-left: 0;
        border-radius:0 ;
    }

  

   
 }
    

    .thumbNailImages{
        display: flex ;
        justify-content: space-between;
        max-width:85% ;

    
        @media screen and (max-width: 970px) {
            flex-direction: row;
            height: 50vw;
            align-items: center;
            flex-wrap: wrap;
    }

    @media screen and (max-width: 600px) {
       display: none;
    }


        img:nth-child(${(props) => props.actived}){

            filter: opacity(.6);
            border: 3px solid var(--Orange)

            
        }

     

    }

    .roundedBox{
       
        position: absolute;
        z-index: 999;
        background-color: #fff;
        align-items: center;
        justify-content: center;
        padding: 1.1rem;
        border-radius: 50%;
        cursor: pointer;
        display: none;
      

        @media screen and (max-width:600px) {
            display: flex;
        }
    }

    svg{
       position:absolute;
       z-index: 999999;
       cursor: pointer;  
    }

    #nextIcon{
        
       right: .8rem;
    }
    #previousIcon{
       left: .8rem;
    }
       
 
`

export const ProductInfo = styled.div`
  flex-basis: 45%;
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  gap: 1.8rem;
  align-self: center;

  h2 {
    font-size: var(--font-size-3);
  }

  .productPriceOffer {
    display: flex;
    gap: 1rem;

    h3 {
      font-size: var(--font-size-1);
    }
  }

  .discountWrapper {
    background-color: var(--Pale-Orange);
    color: var(--Orange);
    font-weight: bold;
    padding: 0 6px;
    display: grid;
    place-items: center;
  }

  .addCartWrapper {
    display: flex;
    align-items: center;
    gap: 2rem;

    button {
      flex: 1.5;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      user-select: none;
    }
  }

  .numberItens {
    display: flex;
    gap: 1rem;
    flex: 1;
    align-items: center;
    justify-content: space-around;

    p {
      font-weight: bold;
      user-select: none;
    }

    svg {
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  #oldPrice {
    margin-top: -1.3rem;
    text-decoration: line-through;
    color: var(--text-paragraph);
    opacity: 0.8;
  }

  .sneakersBrand {
    color: var(--Orange);
    font-weight: 700;
    letter-spacing: 2px;
    font-size: var(--font-size--1);
    text-transform: uppercase;
  }

  .paragraph {
    color: var(--text-paragraph);
  }

  @media screen and (max-width: 600px) {
    margin: 0 1rem;
  }
`;

export const ThumbImage = styled.img<{ actived: number }>`
  max-width: 22%;
  border-radius: 0.7rem;

  @media screen and (max-width: 970px) {
    max-width: 47%;
    flex: 1;
  }
`;
