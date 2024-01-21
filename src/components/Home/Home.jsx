import {
    Container,
    Button,
    HeroContainer,
    BrandContainer,
    Servicesoffered,
    RiskAssessment,
    Riskscale,
    StyledRangeInput,
    Riskscaleoptions,
    Riskscaleoptionsmore,
    Appsection,
    Appsectionimage,
    Footer,
    Riskcomment,
    FinalfooterList,
    Footerfinal
} from "../../styles/homestyle";
import { Header } from "./Header";
import logohome from "../../images/logohome.svg";
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
import { useState, useEffect } from "react";
import axios from "axios";

const GlobalStyle = createGlobalStyle`
  body, h1, h2, h3, p, div, ul, li {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;



export default function Home() {

    const [riskObjects, setRiskObjects] = useState([{}]);
    const [rangeValue, setRangeValue] = useState(5);
    const [nigerianStock, setNigeriaStock] = useState(0);
    const [foreignStock, setForeignStock] = useState(0);
    const [techStock, setTechStock] = useState(0);
    const [emergingStock, setEmergingStock] = useState(0);
    const [nigerianBond, setNigeriaBond] = useState(0);
    const [foreignBond, setForeignBond] = useState(0);
    const [alternative, setAlternative] = useState(0);
    const [commodities, setCommodities] = useState(0);
    const [tBills, setTBills] = useState(0);
    const [realEstate, setRealEstate] = useState(0);


    const handleInputChange = (event) => {
        setRangeValue(parseInt(event.target.value, 10));
        const riskChosen = localStorage.getItem('risk--object');
        if (riskChosen) {
            const filteredObject = JSON.parse(riskChosen).filter((risk) => parseInt(risk.riskScore, 10) === rangeValue);
            setAlternative(filteredObject[0].riskOptions.alternative);
            setCommodities(filteredObject[0].riskOptions.commodities);
            setEmergingStock(filteredObject[0].riskOptions.emergingStock);
            setForeignBond(filteredObject[0].riskOptions.foreignBond);
            setForeignStock(filteredObject[0].riskOptions.foreignStock);
            setNigeriaBond(filteredObject[0].riskOptions.nigerianBond);
            setNigeriaStock(filteredObject[0].riskOptions.nigerianStock);
            setRealEstate(filteredObject[0].riskOptions.realEstate);
            setTBills(filteredObject[0].riskOptions.tBills);
            setTechStock(filteredObject[0].riskOptions.techStock);
        }
        return;
    }

    const nsWidth = `${2 * nigerianStock}%`;
    const fsWidth = `${2 * foreignStock}%`;
    const tsWidth = `${2 * techStock}%`;
    const nbWidth = `${2 * nigerianBond}%`;
    const fbWidth = `${2 * foreignBond}%`;
    const commWidth = `${2 * commodities}%`;
    const emergeWidth = `${2 * emergingStock}%`;




    useEffect(() => {
        console.log('Use effect running ...')
        const getrisk = async () => {
            try {
                const res = await axios.get(`https://lemonbackend.netlify.app/.netlify/functions/index/getrisk`);

                if (res.status === 200) {
                    localStorage.setItem("risk--object", JSON.stringify(res.data));
                    setRiskObjects(res.data);
                    const filteredRisk = res.data.filter((risk) => parseInt(risk.riskScore, 10) === rangeValue);

                    setAlternative(filteredRisk[0].riskOptions.alternative);
                    setCommodities(filteredRisk[0].riskOptions.commodities);
                    setEmergingStock(filteredRisk[0].riskOptions.emergingStock);
                    setForeignBond(filteredRisk[0].riskOptions.foreignBond);
                    setForeignStock(filteredRisk[0].riskOptions.foreignStock);
                    setNigeriaBond(filteredRisk[0].riskOptions.nigerianBond);
                    setNigeriaStock(filteredRisk[0].riskOptions.nigerianStock);
                    setRealEstate(filteredRisk[0].riskOptions.realEstate);
                    setTBills(filteredRisk[0].riskOptions.tBills);
                    setTechStock(filteredRisk[0].riskOptions.techStock);
                } else {
                    return;
                }
            } catch (err) {
                console.log(err);
            }
        }

        getrisk();
    }, []);

    return (
        <>
            <GlobalStyle />
            <Container>
                <Header/>
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
                            <p>Risk assessment scale: {rangeValue}.0</p>
                            <StyledRangeInput
                                type="range"
                                min="0"
                                max="10"
                                value={rangeValue}
                                step="1"
                                onChange={handleInputChange}
                            />
                        </Riskscale>
                        <Riskscaleoptions>
                            <div style={{ backgroundColor: 'rgb(189, 189, 239)', width: nsWidth, }}><p>Nigerian stocks:</p> <p>{nigerianStock}%</p></div>
                            <div style={{ backgroundColor: 'rgb(189, 239, 208)', width: fsWidth }}><p>Foreign stocks:</p> <p>{foreignStock}%</p></div>
                            <div style={{ backgroundColor: 'rgb(239, 209, 189)', width: tsWidth }}><p>Tech stocks:</p> <p>{techStock}%</p></div>
                            <div style={{ backgroundColor: 'rgb(189, 222, 239)', width: nbWidth }}><p>Nigerian bonds:</p> <p>{nigerianBond}%</p></div>
                            <div style={{ backgroundColor: 'rgb(239, 189, 220)', width: fbWidth }}><p>Foreign bonds:</p> <p>{foreignBond}%</p></div>
                            <div style={{ backgroundColor: 'rgb(220, 200, 189)', width: emergeWidth }}><p>Emerging stocks:</p> <p>{emergingStock}%</p></div>
                            <div style={{ backgroundColor: 'rgb(239, 189, 191)', width: commWidth }}><p>Commodities:</p> <p>{commodities}%</p></div>
                        </Riskscaleoptions>
                        <Riskscaleoptionsmore>
                            <div>Real estate: <p>{realEstate}%</p></div>
                            <div>T-bills: <p>{tBills}%</p></div>
                            <div>Alternative: <p>{alternative}%</p></div>
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