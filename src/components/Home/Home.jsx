import { Container, Header, Button, Ul, HeroContainer } from "../../styles/homestyle";
import logohome from "../../images/logohome.svg";
import menuIcon from "../../images/menuIcon.svg"
import "../../styles/homestyle.scss";


export default function Home() {
    return (
        <>
            <Container>
                <Header>
                    <img id="logo" src={logohome} alt="=logo" width="50px" height="50px" />
                    <Ul>
                        <li>Investments</li>
                        <li>Portfolio</li>
                        <li>Stocks</li>
                        <li>About Us</li>
                    </Ul>
                    <div>
                        <Button>Login</Button>
                        <Button>Signup</Button>
                    </div>
                    <img src={menuIcon} alt="menuicon" width="35px" height="35px" id="menuIcon"/>
                </Header>
                <HeroContainer>
                    <div>
                        <p>Lets' help you grow your assets.</p>
                        <p>At<span>Lemon,</span>we have the best hands to manage your portfolio.</p>
                       <Button>Get started</Button>
                    </div>
                    <div id="heroPage--right"></div>
                </HeroContainer>
            </Container>
        </>
    )
}