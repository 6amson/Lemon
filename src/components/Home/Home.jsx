import { Container, Header, Button, Ul, HeroContainer, BrandContainer, Servicesoffered, RiskAssessment } from "../../styles/homestyle";
import logohome from "../../images/logohome.svg";
import menuIcon from "../../images/iconsMenu.png";
import airbnb from "../../images/airbnb.svg";
import cocacola from "../../images/cocacola.svg";
import slack from "../../images/slack.svg";
import soundcloud from "../../images/soundcloud.svg";
import "../../styles/homestyle.scss";
import coinLemon from "../../images/coinLemon.png";
import teamLemon from "../../images/teamLemon.png"
import phoneLemon from "../../images/phoneLemon.png"



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
                    <img src={menuIcon} alt="menuicon" width="35px" height="35px" id="menuIcon" />
                </Header>
                <HeroContainer>
                    <div>
                        <p>Lets' help you grow your assets.</p>
                        <p>At<span>Lemon,</span>we have the best hands to manage your portfolio.</p>
                        <Button>Get started</Button>
                    </div>
                    <div id="heroPage--right"></div>
                </HeroContainer>
                <BrandContainer>
                    <p>Brands trust us, you can too.</p>
                    <div>
                        <img src={airbnb} alt="airbnb" width="64px" height="64px" />
                        <img src={cocacola} alt="cocacola" width="64px" height="64x" />
                        <img src={soundcloud} alt="soundcloud" width="64px" height="64px" />
                        <img src={slack} alt="slack" width="64px" height="64px" />
                    </div>
                </BrandContainer>
                <Servicesoffered>
                    <div>
                        <p>Effortlessly take control of your assets with our all-in-one Asset Management App. From tracking inventory and equipment to monitoring financial portfolios, our platform provides a comprehensive solution for efficient asset management.</p>
                        <img src={phoneLemon} alt="phone 3d illustration" width="230px" height="200px" />
                    </div>
                    <div>
                        <img src={teamLemon} alt="team 3d illustration" width="250px" height="200px" />
                        <p>We go beyond traditional asset management. Our team brings strategic insights, leveraging market trends and data analytics to make informed decisions that drive positive outcomes for your portfolio.</p>
                    </div>
                    <div>
                        <p>We take pride in offering an asset management approach that goes beyond conventional strategies, ensuring not only the preservation but the consistent growth of your investments harnessing the power of data analytics.</p>
                        <img src={coinLemon} alt="coin 3d illustration" width="200px" height="200px" />
                    </div>
                </Servicesoffered>
                <RiskAssessment>
                    <div>
                        <input
                            type="range"
                            // id={`rangeInput-${key}`}
                            min="0"
                            max="10"
                            // value={values[key]}
                            step="1"
                            // onChange={(event) => handleInputChange(key, event)}
                        />

                    </div>
                    <div>

                    </div>
                </RiskAssessment>
            </Container>
        </>
    )
}