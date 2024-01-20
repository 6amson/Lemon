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
 height: fit-content;
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
        padding-top: 32px;
        padding-bottom: 32px;
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
grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
font-family: ClashDisplay-Variable; 
grid-gap: 16px;
margin-bottom: 128px;

button{
    background: black;
    color: white;
    border: solid 1px black;
    font-weight: 600;
    padding: 20px 30px;
    margin-left: -8px;
    margin-top: 32px;


    &:hover{
        background: #FBCA3F;
        color: black;
    }
   }

div:not(:first-child) {
    font-weight: 500;
    p{
        margin-left: 16px;
    }
}

`

export const Riskscale = styled.div`
    background:  white;
    border-radius: 16px;
    padding: 16px;
    width: 70%;
    box-shadow: .5px .5px 3px .5px #323143;
    place-items: center;
    display: grid;
    margin-bottom: 32px;
    margin-left: -8px;

    p{
        font-weight: 600;
    }

    input{
        width: 100%;
        margin-top: 16px;
    }

    @media (max-width: 600px) {
       width: 90%;
    }

`

export const Riskscaleoptions = styled.div`
    div{
        display: flex;
        background: red;
        margin-bottom: 16px;
        padding: 8px;
        margin-right: 16px;
        border-radius: 8px;
    }
`

export const Riskscaleoptionsmore = styled.div`
display: flex;

    div{
        display: flex;
        margin-right: 16px;
    }
`

export const StyledRangeInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-left: 16px;
  background-color: black;
  background: linear-gradient(to right, grey, whitesmoke, black);
  height: 5px;
  border-radius: 4px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: whitesmoke;
    box-shadow: .5px .5px 3px .5px #323143;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background-color: #007BFF;
    border-radius: 50%;
    cursor: pointer;
  }
`

export const Riskcomment = styled.div`
background: #FBCA3F;
width: fit-content;
padding: 32px;
display: flex;
flex-wrap: wrap;
align-items: center;
margin-left: -16px;

p:first-child{
    font-size: 72px;
    font-weight: 700;
    margin-bottom: 16px;
}

p:not(p:first-child){
    font-size: 16px;
}

@media (max-width: 560px) {

    margin-left: -16px;
    margin-top: 64px;

    p:first-child {
        font-size: 56px;
    }
}
`

export const Appsection = styled.div`
  background: rgb(255, 245, 214);
  width: 100vw;
  height: fit-content;
  position: relative;
  height: max-content;
  margin-top: 128px;
  width: 100vw;
  display: grid;
  gap: 64px;
  place-items:  center;
  padding: 64px 32px 64px 40px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  font-family: ClashDisplay-Variable; 

  div:first-child{
    text-align: center;

    @media (max-width: 850px) {
        margin-bottom: 32px;
    }

    p:not(:first-child){
        
    }
    
    p:first-child{
        font-size: 72px;
        font-weight: 700;
        margin-bottom: 16px;

        span{
            font-family: DancingScript-Regular;
            margin-left: 16px;
        }

        span:not(:first-child){
            font-size: 72px;
            font-weight: 700;
            color: #FBCA3F;
           font-family: ClashDisplay-Variable; 

        }
    }
  }


`

export const Appsectionimage = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  img:first-child{
    border-radius: 100px;
  }

  div:last-child{

  }
`

export const Footer = styled.div`
position: relative;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 128px 32px 32px 40px;
font-family: ClashDisplay-Variable;

div:first-child{
    img{
    rotate: -45deg;
    cursor: pointer;
    }

    @media (max-width: 770px){
        margin-bottom: 32px;
    }
}

ul{
    list-style: none;

    li:not(:first-child){
        margin-bottom: 8px;
        cursor: pointer;
    }

    li:first-child{
        font-weight: bold;
        margin-bottom: 16px;
    }
}


@media (max-width: 770px){
    display: block;
}
`

export const FinalfooterList = styled.div`
    text-align: center;
    width: fit-content;

  ul{
    display: flex;
    list-style: none;

    li{
        margin-right: 16px;
        border: solid 1px black;
        border-radius: 50%;
        display: flex;
        width: 40px;
        height: 40px;
        background: linear-gradient(to left, #FBCA3F 50%, rgb(255, 255, 255) 50%);
        background-size: 200% 100%; 
        transition: background-position 0.3s ease;
        cursor: pointer;

        &:hover{
            background-position: -100% 0;
        }

        img{
        width: 15px;
        height: 15px;
        display: flex;
        align-self: center;
        margin: 20px;
        }
    }
  }

  @media (max-width: 770px){
    margin-bottom: 32px;
    margin-top: 48px;
}
`

export const Footerfinal = styled.div`
  font-family: ClashDisplay-Variable;
  font-weight: 500;
  margin-left: 40px;

  @media (max-width: 770px){
    margin-left: 16px;
    margin-bottom: 32px;
}
`