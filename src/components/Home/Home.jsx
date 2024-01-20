import { Container, Header, Button, Ul, HeroContainer, BrandContainer, Servicesoffered, RiskAssessment, Riskscale, StyledRangeInput, Riskscaleoptions, Riskscaleoptionsmore, Appsection, Appsectionimage, Footer, Riskcomment, FinalfooterList, Footerfinal } from "../../styles/homestyle";
import logohome from "../../images/logohome.svg";
import menuIcon from "../../images/iconsMenu.png";
import airbnb from "../../images/airbnb.svg";
import cocacola from "../../images/cocacola.svg";
import slack from "../../images/slack.svg";
import soundcloud from "../../images/soundcloud.svg";
import "../../styles/homestyle.scss";
import coinLemon from "../../images/coinLemon.png";
import teamLemon from "../../images/teamLemon.png"
import phoneLemon from "../../images/phoneLemon.png";
import model1 from "../../images/lemonModel.png";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import linkedin from "../../images/linkedin.svg";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, h1, h2, h3, p, div, ul, li {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;



export default function Home() {

    const dynamicWidth1 = `${10 * 4.5}%`;

    return (
        <>
            <GlobalStyle />
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
                        <img id="teamLemon" src={teamLemon} alt="team 3d illustration" width="250px" height="200px" />
                        <p>We go beyond traditional asset management. Our team brings strategic insights, leveraging market trends and data analytics to make informed decisions that drive positive outcomes for your portfolio.</p>
                    </div>
                    <div>
                        <p>We take pride in offering an asset management approach that goes beyond conventional strategies, ensuring not only the preservation but the consistent growth of your investments harnessing the power of data analytics.</p>
                        <img src={coinLemon} alt="coin 3d illustration" width="200px" height="200px" />
                    </div>
                </Servicesoffered>
                <RiskAssessment>
                    <div>
                        <Riskscale>
                            <p>Risk assessment scale: 10.0</p>
                            <StyledRangeInput
                                type="range"
                                // id={`rangeInput-${key}`}
                                min="0"
                                max="10"
                                // value={values[key]}
                                step="1"
                            // onChange={(event) => handleInputChange(key, event)}
                            />
                        </Riskscale>
                        <Riskscaleoptions>
                            <div style={{ backgroundColor: 'rgb(189, 189, 239)', width: dynamicWidth1, }}>Nigerian stocks: <p>40%</p></div>
                            <div style={{ backgroundColor: 'rgb(189, 239, 208)' }}>Foreign stocks: <p>40%</p></div>
                            <div style={{ backgroundColor: 'rgb(239, 209, 189)' }}>Tech stocks: <p>40%</p></div>
                            <div style={{ backgroundColor: 'rgb(189, 222, 239)' }}>Nigerian bonds: <p>40%</p></div>
                            <div style={{ backgroundColor: 'rgb(239, 189, 220)' }}>Foreign bonds: <p>40%</p></div>
                            <div style={{ backgroundColor: 'rgb(239, 189, 191)' }}>Commodities: <p>40%</p></div>
                        </Riskscaleoptions>
                        <Riskscaleoptionsmore>
                            <div>Real estate: <p>0%</p></div>
                            <div>T-bills: <p>0%</p></div>
                            <div>Alternative: <p>0%</p></div>
                        </Riskscaleoptionsmore>
                        <Button>Get started</Button>
                    </div>

                    <Riskcomment>
                        <p>Interact with our risk assessment scale</p>
                        <p>Just answer a few questions, and we’ll build you a personalized portfolio of low-cost index funds from up to 17 global asset classes. Our software handles all the trading, rebalancing, and other busywork to help grow your wealth for the long term.</p>
                    </Riskcomment>

                </RiskAssessment>
                <Appsection>
                    <div>
                        <div>
                            <p>With a small fee, <span>we can do big things at</span><span>0.25%.</span></p>
                            {/* <AppsectionPert>0.25%.</AppsectionPert> */}
                        </div>
                        <p>For just 0.25% a year, Automated Investing Account clients get all the benefits of always-on automation,
                            expert-curated portfolios, and Tax-Loss Harvesting that typically covers our fee more than 11x over.</p>
                    </div>
                    <Appsectionimage>
                        <img src={model1} alt="model for lemon" width="250px" height="400px" />
                        <div id="appsection--spareimage1"></div>
                        <div id="appsection--spareimage2"></div>
                    </Appsectionimage>
                </Appsection>
                <Footer>
                    <div class="logo"><img src={logohome} alt="Lemon logo" width="50px" height="50px" /></div>
                    <ul class="firstListF">
                        <li>Sitemap</li>
                        <li>Help center</li>
                        <li>Our divisions</li>
                        <li>Industry sectors</li>
                        <li>Company information</li>
                        <li>More info on Lemon</li>
                    </ul>
                    <FinalfooterList>
                        <ul class="secondListF">
                            <li><img src={instagram} alt="instagram Icon" /></li>
                            <li><img src={linkedin} alt="linkedin Icon" /></li>
                            <li><img src={twitter} alt="twitter Icon" /></li>
                        </ul>

                        <div class="thirdListF">
                            <p>Contact Us</p>
                        </div>
                    </FinalfooterList>
                </Footer>
                <Footerfinal>
                    2022 &copy; - all rights reserved.
                </Footerfinal>
            </Container>
        </>
    )
}