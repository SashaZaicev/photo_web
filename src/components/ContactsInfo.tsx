import React from 'react';
import s from "./Style.module.css"
import telegramIcon from '../img/telegram2.svg'
import vkIcon from '../img/vk.svg'
import LinkedInIcon from '../img/linkedin.svg'
import facebookIcon from '../img/facebook.svg'


const ContactsInfo = () => {

    return (
        <div className={s.contactsMain}>
            <div>
                <a href="mailto:sasha167@bk.ru"
                   data-action="mail" className="moto-link" target="_blank">
                    <span className="fa"></span> sasha167@bk.ru
                </a>
            </div>
            <div>
                <a href="tel:+375298727286" data-action="call" className="moto-link"><span
                    className="fa"></span> +375298727286</a>
            </div>
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
    );
};

export default ContactsInfo;