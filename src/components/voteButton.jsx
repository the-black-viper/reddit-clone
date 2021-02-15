import { makeStyles, Typography, Button } from '@material-ui/core';
import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import db from '../lib/firebase';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '40px',
        margin: '5px'
    },
    button: {
        color: 'white',
        maxWidth: '40px',
        maxHeight: '40px',
        minWidth: '30px',
        minHeight: '30px'
    },
    voteContainer: {
        color: 'white',
        textAlign: 'center'
    }
}));



const VoteButtons = ({post}) => {
    const handleClick = async (type) => {
        // Do calculation to save the vote.
        let upVotesCount = post.upVotesCount;
        let downVotesCount = post.downVotesCount;
    
        const date = new Date();
    
        if (type === "upvote") {
          upVotesCount = upVotesCount + 1;
        } else {
          downVotesCount = downVotesCount + 1;
        }
    
        await db.collection("userPosts").doc(post.id).set({
          title: post.title,
          content: post.content,
          upVotesCount,
          downVotesCount,
          createdAt: post.createdAt,
          updatedAt: date.toUTCString(),
        });
      };
    

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Button className={classes.button} onClick={() => {handleClick('upvote')}}>
                <ArrowUpwardIcon />
            </Button>
           
            <Typography className={classes.voteContainer}>{post.upVotesCount - post.downVotesCount}</Typography>
            <Button className={classes.button}  onClick={() => {handleClick('downvote')}}>
                <ArrowDownwardIcon/>
            </Button>
        </div>
    )
};

export default VoteButtons;