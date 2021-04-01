import React from 'react';
import s from "./Contacts.module.css"
import SimpleMap from './SimpleMap';
import phone from "../img/facebook.svg"
import EmailForm from './emailJs/EmailForm';

const Contacts = () => {

    return (
        <div className={s.contactsContainer}>
            <div className={s.titleContainer}>
                <div className={s.line}>
                    <hr/>
                </div>
                <div className={s.title}>contacts</div>
            </div>
            <div>
                <div className={s.map}><SimpleMap/></div>
                <div className={s.contactsBlock}>
                    <div>
                        <div>
                            <img src={phone} alt=""/>
                        </div>
                        <div>
                            <div><span>Phone number</span></div>
                            <div><a href="tel:+375298727286">
                                +375298727286</a></div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={phone} alt=""/>
                        </div>
                        <div>
                            <div><span>E-mail</span></div>
                            <div><a href="mailto: sasha167@bk.ru" target="_blank">
                                sasha167@bk.ru</a></div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={phone} alt=""/>
                        </div>
                        <div>
                            <div><span>Location</span></div>
                            <div>Location</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={phone} alt=""/>
                        </div>
                        <div>
                            <div><span>Work Hours</span></div>
                            <div>Time</div>
                        </div>
                    </div>
                </div>
            </div>
            <EmailForm/>
        </div>
    );
};

export default Contacts;