import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NewPost from './newPost';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    appbar: {
        backgroundColor: '#1F2133'
    },
    appbarWrapper: {
        display: 'flex',
        justifyContent: 'center'
    }
}));


const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} id='header'>
            <AppBar className={classes.appbar} elevation={1}>
                <Toolbar className={classes.appbarWrapper}>
                    <NewPost/>
                </Toolbar>
            </AppBar>
        </div>
    );

};


export default Header;