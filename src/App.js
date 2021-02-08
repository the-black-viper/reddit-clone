import React, {useEffect, useState} from 'react';
import { CssBaseline, Paper, makeStyles} from '@material-ui/core';
import Post from "./components/post";
import db from "./lib/firebase";
import Header from './components/header';



const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#212121'
  },
  postContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginTop: '75px',
    maxWidth: '500px'
  }
}));



const App = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Hook to handle the initial fetching of posts

    db.collection("posts")
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

    db.collection("posts")
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

  return (
    <>
      <CssBaseline/>
      <div className={classes.root}>
        <Header/>
        <div className={classes.postContainer}>
        {posts.map((post) => (
            <Post post={post} key={post.id}/>
          ))}
        </div>
      </div>
    </>
  );
};
export default App;
