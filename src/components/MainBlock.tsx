import React from 'react';
import Carousel from "./Slider/Carousel";
import ContactsInfo from "./ContactsInfo";
import s from './Style.module.css'
import Projects from "./Projects";
import Footer from "./Footer";
import {Route} from "react-router-dom";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";


const MainBlock = () => {
    return (
        <div className="event_name">
            <div className="wrapper"><Carousel/></div>
            <div className={s.contactsBody}><ContactsInfo/></div>
            <div className={s.titleContainer}>
                <div className={s.line}>
                    <hr/>
                </div>
            </div>
            {/*<Redirect exact from="/" to="/projects" />*/}
            <Route exact path='/' render={() => <div><Projects/></div>}/>
            <Route path='/projects' render={() => <div><Projects/></div>}/>
            <Route path='/aboutMe' render={() => <div><AboutMe/></div>}/>
            <Route path='/contacts' render={() => <div><Contacts/></div>}/>
            <div><Footer/></div>
        </div>
    );
};

export default MainBlock;