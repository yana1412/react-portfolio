import React from 'react'
import instagram from '../../img/icons/instagram.svg'
import gitHub from '../../img/icons/gitHub.svg'
import telegram from '../../img/icons/telegram.svg'
import linkedin from '../../img/icons/linkedIn.svg'
import './style.css'

function Footer(){
    return(
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://instagram.com/ianadenisiuk1175?igshid=YmMyMTA2M2Y="><img src={instagram} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://t.me/YanaDenysiuk"><img src={telegram} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://github.com/yana1412"><img src={gitHub} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://www.linkedin.com/in/%D1%8F%D0%BD%D0%B0-%D0%B4%D0%B5%D0%BD%D0%B8%D1%81%D1%8E%D0%BA-697722252/"><img src={linkedin} alt="Link" /></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2022 frontend-dev.com</p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer