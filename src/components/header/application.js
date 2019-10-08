import React, {Component} from 'react'
import config from 'react-global-configuration';

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import styles from './style.module.css';
import { style } from '@material-ui/system';


class Header extends Component {
    render(){
        return(
            <div className={styles.grow}>
                <AppBar position="static">
                    <Toolbar className={styles.toolbar}>
                        <IconButton className={styles.iconButton}>
                            <MenuIcon></MenuIcon>
                        </IconButton>
                        <Typography className={styles.typography} variant="h6" noWrap>{config.get("nameapp")}
                        </Typography>
                        <div className={styles.search}>
                            <SearchIcon></SearchIcon>
                        </div>
                    </Toolbar>

                </AppBar>
            </div>
        )
    }
}

export default Header