import { HeaderS, Ul, Button} from "../../styles/homestyle";
import logohome from "../../images/logohome.svg";
import menuIcon from "../../images/iconsMenu.png";



export function Header() {
    return (
        <HeaderS>
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
        </HeaderS>
    )
}