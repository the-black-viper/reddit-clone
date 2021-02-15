import React, {useEffect, useState} from 'react';
import { CssBaseline, Paper, makeStyles} from '@material-ui/core';
import CardPost from "./components/cardPost";
import db from "./lib/firebase";
import Header from './components/header';
import { useDispatch, useSelector } from "react-redux";
import { clickTrigger } from "./redux/cardState";
import FocusPost from "./components/focusPost";

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#0B0C10'
  },
  postContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginTop: '75px',
    maxWidth: '500px'
  },
  
}));



const App = () => {
  const classes = useStyles();
  const click  = useSelector((state) => state.clickReducer);
  const currentPost = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Hook to handle the initial fetching of posts

    db.collection("userPosts")
      .orderBy("createdAt", "desc")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPosts(data);
      });
  }, []);

  useEffect(() => {
    // Hook to handle the real-time updating of posts whenever there is a
    // change in the datastore (https://firebase.google.com/docs/firestore/query-data/listen#view_changes_between_snapshots)

    db.collection("userPosts")
      .orderBy("createdAt", "desc")
      .onSnapshot((querySnapshot) => {
        const _posts = [];

        querySnapshot.forEach((doc) => {
          _posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setPosts(_posts);
      });
  }, []);
  // console.log(click)
  console.log(posts)
  return (
    <>
      <CssBaseline/>
      <div className={classes.root}>
        
        <Header/>
        { click ?
        <div className={classes.postContainer}>
        {posts.map((post) => (
            <CardPost key={post.id} className={classes.post} post={post}/>
          ))}
        </div>
        :
        <FocusPost key={currentPost.id} post={currentPost}/>
        // <div>
        //   <h1 style={{color: '#ffffff', marginTop: '150px'}}>{`Post: ${currentPost.id}`}</h1>
        // </div>
        }
      </div>
    </>
  );
};
export default App;
