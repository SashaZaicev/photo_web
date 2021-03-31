import React from 'react';
import s from "./Footer.module.css"
import logo from "../img/camera.png";
import telegramIcon from "../img/telegram2.svg";
import facebookIcon from "../img/facebook.svg";
import LinkedInIcon from "../img/linkedin.svg";
import vkIcon from "../img/vk.svg";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className={s.titleContainer}>
                <div className={s.line}>
                    <hr/>
                </div>
            </div>
            <div className={s.footerContainer}>
                <NavLink className={s.center} to="/"><div className={s.logo}><img src={logo} alt=""/><span>Polstsiuk</span></div></NavLink>
                <div className={s.socialBlock}>
                    <div className={s.socialIcon}><a target="_blank" href="https://t.me/SashaZaitsau"><img
                        src={telegramIcon} alt=""/></a></div>
                    <div className={s.socialIcon}><a target="_blank"
                                                     href="https://www.facebook.com/profile.php?id=100005987055173&ref=bookmarks"><img
                        src={facebookIcon} alt=""/></a></div>
                    <div className={s.socialIcon}><a target="_blank"
                                                     href="https://www.instagram.com/wildbunnyboy/?hl=ru"><img
                        src={LinkedInIcon} alt=""/></a></div>
                    <div className={s.socialIcon}><a target="_blank" href="https://vk.com/id53738228"><img src={vkIcon}
                                                                                                           alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;