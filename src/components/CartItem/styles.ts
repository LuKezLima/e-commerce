import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 gap: .8rem;
margin-bottom: .7rem;
padding-bottom: .7rem;
border-bottom: 2px solid var(--Pale-Orange);
 img{
     max-width: 20%;
     border-radius: .4rem;
 }

 svg{
     cursor: pointer;
 }

`;


export const ResumeItemCart = styled.div`
  display: flex;
  flex-direction: column;

p{
    text-align: left;
    font-size: var(--font-size--1);
}

#totalPrice{
    color: black;
}
`;
