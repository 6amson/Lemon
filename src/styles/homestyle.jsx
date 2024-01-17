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
    // border-bottom: solid #323143 1px;
    box-shadow: .5px .5px 8px .5px #323143;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 16px;
    padding-left: 32px;
    font-family: ClashDisplay-Variable; 
    font-weight: 500;
    font-size: 18px;

    img:first-child{
    rotate: -45deg;
    &:hover{
        cursor: pointer;
    }
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
        background: linear-gradient(to left, #FBCA3F 50%, rgb(255, 255, 255) 50%);
        background-size: 200% 100%; 

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
    border: solid 1px #4A686A;
    border-radius: 4px;
    font-family: ClashDisplay-Variable; 
    margin-right: 8px;
    font-weight: 500;
    font-size: 18px;

    &:first-child{
        background:  #FBCA3F;
        color: black;
    }

    &:hover{
        background: #111626;
        transition: background .2s ease-in;
        color: white;
        cursor: pointer;

    }

    @media (max-width: 850px) {
        display: none;
    }

`

export const HeroContainer = styled.div`
    height: fit-content;
    margin-top: 128px;
    width: 100vw;
   display: grid;
   padding-left: 64px;
   padding-right: 32px;
   grid-template-columns: repeat(2, 1fr);
   font-family: ClashDisplay-Variable; 

   div:first-child{
        p:first-child{
        font-size: 32px;
        margin-top: 64px;
        margin-bottom: 32px;
        }

        p:nth-child(2){
            font-size: 64px;
            margin-bottom: 64px;
            font-weight: 700;

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
    background: #FBCA3F;
    color: black;
   }

   @media (max-width: 750px) {
    grid-template-columns: 1fr;
    margin-top: 32px;
  }

`