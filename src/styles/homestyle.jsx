import styled from "styled-components";
import "../css/bespoke-serif.css";
import "../css/clash-display.css";
import "../css/dancing-script.css";

export const Container = styled.div`

   * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    position: relative;
    left: -8px;
} 
`
export const Header = styled.header`
    height: 80px;
    width: 100vw;
    top: -8px;
    box-shadow: .5px .5px 8px .5px #323143;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 16px;
    padding-left: 32px;
    font-family: ClashDisplay-Variable; 
    font-weight: 500;
    font-size: 18px;
    background: black;


    img:first-child{
    rotate: -45deg;
    &:hover{
        cursor: pointer;
    }
    }

    @media (max-width: 500px) {
        height: 64px:
    }
`
export const Ul = styled.ul`
    display: flex;
    list-style:  none;

   
    li{
        margin-right: 64px;
        padding: 10px;
        cursor: pointer;
        background: transparent;
        transition: background .5s ease-in;
        position: relative;
        place-self: center;
        background: linear-gradient(to left, #FBCA3F 50%, black 50%);
        background-size: 200% 100%; 
        color: white;

        &:hover{
        color: #323143;
        transition: background .3s ease-in, background-position 0.3s ease;
        background-position: -100% 0;
        }

        
    @media (max-width: 1000px) {
        margin-right: 32px;
    }

    @media (max-width: 850px) {
        display: none;
    }
   
    }

`

export const Button = styled.button`
    width: fit content;
    padding: 10px 20px;
    background-color: transparent;
    border: solid 1px #FBCA3F;
    border-radius: 4px;
    font-family: ClashDisplay-Variable; 
    margin-right: 8px;
    font-weight: 500;
    font-size: 18px;
    color: #FBCA3F;
    transition: background .5s ease-in, color .5s ease;

    &:first-child{
        background: #FBCA3F;
        color:  black;
    }

    &:hover{
        background: #111626;
        transition: background .2s ease-in, color .5s ease;
        color: white;
        cursor: pointer;

    }

    @media (max-width: 850px) {
        display: none;
    }

`

export const HeroContainer = styled.div`
    height: max-content;
    margin-top: 128px;
    width: 100vw;
   display: grid;
   padding-left: 40px;
   padding-right: 32px;
   grid-template-columns: repeat(2, 1fr);
   font-family: ClashDisplay-Variable; 


   div:first-child{
        p:first-child{
        font-size: 32px;
        margin-top: 64px;
        margin-bottom: 32px;

        @media (max-width: 500px) {
        font-size: 24px;
        }
        }

        @media (max-width: 850px) {
            button{
                display: block;
                margin-bottom: 64px;
            }
        }
       


        p:nth-child(2){
            font-size: 64px;
            margin-bottom: 64px;
            font-weight: 700;

            @media (max-width: 750px) {
                margin-bottom: 32px;
                backgorund: red;
            }

            @media (max-width: 500px) {
            font-size: 50px;
            }
                span{
                    margin-left: 20px;
                    font-family: DancingScript-Variable;
                    color: #FBCA3F;
                    font-weight: 700;
                }
            }
   }

   button{
    background: black;
    color: white;
    border: solid 1px black;
    font-weight: 600;
    padding: 20px 30px;
    z-index: 10;


    &:hover{
        background: #FBCA3F;
        color: black;
    }
   }

   @media (max-width: 750px) {
    grid-template-columns: 1fr;
   grid-template-rows: repeat(2, 1fr);
   grid gap: 100px;    margin-top: 16px;
    margin-bottom: 64px;
  }

`

export const BrandContainer = styled.div`
margin-top: 128px;
margin-bottom: 64px;
width: 100vw;



p{
    text-align: center;
    font-family: BespokeSerif-Variable;
    font-size: 32px;
    color: grey;
    font-weight: 500;

    @media (max-width: 500px) {
        font-size: 24px;
    }
}
 
div{
    display: flex;
  justify-content: space-around;
  opacity: 0.8;
  padding: 16px;

  img{
    filter: grayscale(100%);
    opacity: 0.8;

    @media (max-width: 500px) {
       width: 48px;
       height: 48px;
    }
  }
}

@media (max-width: 500px) {
    margin-top: 8px;
 }

`

export const Servicesoffered = styled.div`
 background: black;
 height: fir-content;
 padding-left: 32px;
 padding-right: 16px;
 color: whitesmoke;
 width: 100vw;

 div{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 16px;
    font-family: ClashDisplay-Variable; 
    justify-content: space-around;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;

    p{
        width: 50%;
        font-size: 20px;

        @media (max-width: 500px) {
            font-size: 16px;
        }
    }

    img{
        @media (max-width: 500px) {
            width: 50%;
        }
    }

    @media (max-width: 800px) {
        margin-bottom: 32px;
        padding-top: 16px;
        padding-bottom: 16px;
    }
 }
`

export const RiskAssessment = styled.div`
height: max-content;
margin-top: 128px;
width: 100vw;
display: grid;
padding-left: 40px;
padding-right: 32px;
grid-template-columns: repeat(2, 1fr);
font-family: ClashDisplay-Variable; 
grid-gap: 16px;
`