import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import VoteButtons from "./voteButton";
import { useDispatch, useSelector } from "react-redux";
import { clickTrigger } from "../redux/cardState";
import { setPost } from "../redux/ducks/postSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '10px',
    backgroundColor: '#1F2133',
    [theme.breakpoints.down("xs")]: {
      width: "260px"
    },
  },
  cardContent: {
    
    [theme.breakpoints.up("sm")]: {
        width: "380px"
      },
  },
  postContent: {
    backgroundColor: 'rgba(255,255,255, 0.4)',
    marginRight: '20px',
    paddingTop: '20px',
    width: '2px',
    height: 'auto'
  },

  container: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 14,
    color: 'white'
  },
  content: {
    color: 'white'
  },
  pos: {
    marginBottom: 12,
  },
  
}));



const CardPost = ({post}) => {
  const [clicked, setClick] = React.useState(false);
  const [currPost, setNewPost] = React.useState({});
  const classes = useStyles();
  const click  = useSelector((state) => state.clickReducer);
  const currentPost = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();
  const bull = <span className={classes.bullet}>•</span>;

  const target = e => {
    console.log(e.currentTarget);
  };

  const stopEvent = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    
    console.log(currPost)
  }, [currPost]);

  return (
    <Card className={classes.root} variant="outlined">
      <VoteButtons post={post} onClick={() => {dispatch(setPost(post))}} />
      <CardActionArea  onClick={() => {dispatch(setPost(post)); dispatch(clickTrigger())} }>
      <CardContent className={classes.cardContent} >
        <div className={classes.container}>
        
        <div className={classes.postContent}  />
        <div >
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {`Posted by: ${post.title}`}
        </Typography>
        <Typography className={classes.title} variant="h5" component="h2">
          {post.title}
        </Typography>
        <Typography className={classes.content}  variant="body2" component="p">
          {post.content}
        </Typography>
        </div>
        </div>
      </CardContent>
      </CardActionArea>
      
    </Card>
  );
}

export default CardPost;
