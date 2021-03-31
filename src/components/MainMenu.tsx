import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import s from './Style.module.css'
import logo from "../img/camera2.svg"

import {NavLink} from 'react-router-dom';

export default function FadeMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={s.fadeMenu}>
            <NavLink className={s.center} to="/">
                <div className={s.logo}><img src={logo} alt=""/><span>Polstsiuk</span></div>
            </NavLink>
            <Button className={s.btnMenu} aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                Click me
            </Button>
            <Menu className={s.menuItem}
                  id="fade-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
            >
                <NavLink href="#aboutMe" to="/aboutMe"><MenuItem onClick={handleClose}>About me</MenuItem></NavLink>
                <NavLink to="/projects"><MenuItem onClick={handleClose}>Projects</MenuItem></NavLink>
                <NavLink to="/contacts"><MenuItem onClick={handleClose}>Contacts</MenuItem></NavLink>
            </Menu>
        </div>
    );
}
