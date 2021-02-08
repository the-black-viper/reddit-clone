import React from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core";
import VoteButtons from "./voteButton";


const useStyles = makeStyles((theme) => ({
  container: {
      display: 'flex',
      justifyContent: 'flex-start',
      margin: '10px',
      backgroundColor: '#616161'
  },
  post: {
    // padding: '15px'
    color: 'white',
    margin: '15px'
  }
}));

function trimPost(longPost) {
  const charLimit = 40;
  if (longPost.length > charLimit) {
    let trimmedPost = longPost.substring(0, charLimit);

    return trimmedPost + " ...";
  } else {
    return longPost;
  }
}

const Post = ({ post }) => {
    const classes = useStyles();
    return (
      <Paper className={classes.container}>
        <VoteButtons post={post}/>
        <Typography key={post.id} className={classes.post}>{trimPost(post.title)}</Typography>
      </Paper>
  );
};

export default Post;