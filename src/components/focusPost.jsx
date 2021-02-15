import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from "react-redux";
import { clickTrigger } from "../redux/cardState";
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#1c202e',
        width: '100%'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#0B0C10',
        width: '80%',
        height: 'auto'
    },
    titleText: {
        color: 'rgba(255, 255, 255, 0.8)'
    },
    text: {
        color: '#ffffff'
    },
    card: {
        marginTop: '100px',
        backgroundColor: '#1F2133',
        width: '60%',
        height: '70%'
    },
    iconButton: {
        float: 'right',
        position: 'relative',
        transform: "translateX(-80%)"
    },
    closeIcon: {
        marginTop: '65px',
        color: 'white',
    }

}));


const FocusPost = ({post}) => {
    console.log({post});
    const classes = useStyles();
    const {title, content} = post;
    const dispatch = useDispatch();
    console.log(title)

    const stopEvent = (event) => {
        event.stopPropagation();
    };

    return (
        <div className={classes.root} onClick={() => dispatch(clickTrigger())}>
            
            <div className={classes.container} onClick={stopEvent}>
                
                
                <Card className={classes.card} variant="outlined">
                    <CardActionArea>
                        <CardContent>
                            {/* <Typography className={classes.titleText} color="textSecondary" gutterBottom>
                                {`Posted by: ${title}`}
                            </Typography> */}
                            <Typography className={classes.text}
                            variant="h4"
                            component="h5"
                            fontSize="28px"
                            fontWeight="fontWeightBold"
                            m={1} >
                                {title}
                            </Typography>
                            <Typography className={classes.text} variant="body2" component="p">
                                <br/>
                                {content}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <IconButton onClick={() => dispatch(clickTrigger())}>
                    <CloseIcon className={classes.closeIcon}/>
                </IconButton>
            </div>

        </div>
    )
    

};

export default FocusPost;