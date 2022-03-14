import styled from "styled-components";

export const Container = styled.div<{activeModal: boolean, activeMenu:boolean}>`
  position: absolute ;
  right: 0;
  top: clamp(4rem,7vw + .4rem,7rem) ;// altura do header;
  
  background-color: #fff ;
  border-radius:.6rem ;
  box-shadow:2px 4px 6px  #d9d9d9 ;
  display: ${props => props.activeModal && props.activeMenu === false ? 'flex': 'none'};
  flex-direction: column;
  padding: 1rem ;
  gap: 1rem ;

  min-width: 20rem ;
  width: 20vw;
  max-width: 35rem;
z-index: 99999;


  p{
    text-align: left;
    color:var(--text-paragraph);
  
  }
  hr{
    border-color: #f0f0f0;
    opacity:.6 ;
  }

  h3{
    font-size: var(--font-size-0) ;
  }

  @media screen and (max-width: 600px) {
       border-radius: 0;
    }

 

  `
