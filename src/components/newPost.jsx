import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, withStyles } from '@material-ui/core';
import db from '../lib/firebase';




const useStyles = makeStyles((theme) => ({
    button: {
        color: 'white',
        borderColor: 'yellow'
    },
    container: {
        backgroundColor: '#626262',
    },
    dialogText: {
        color: 'white'
    },
    titleField: {
      marginTop: '20px',
      width: '50vh',
      color: 'white'
    },
    postField: {
      display: 'flex',
      alignItems: 'flex-start',
      marginTop: '20px',
      width: '50vh',
      height: '350px',
      color: 'white'
    }
}));


const CssTextField = withStyles({
    root: {
      '& label': {
            color: 'white',
            marginTop: '20px'
      },
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'yellow',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
      },
    },
  })(TextField);


function NewPost() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleTextFieldChange = (event) => {
        setTitle(event.target.value)
    }

  
    const handleSubmit = async () => {
        const date = new Date();

        await db.collection("userPosts").add({
            content,
            title,
            upVotesCount: 0,
            downVotesCount: 0,
            createdAt: date.toUTCString(),
            updatedAt: date.toUTCString(),
        });
        handleClose();
    };

  return (
      <div>
        <Button className={classes.button} variant="outlined" onClick={handleClickOpen}>
              Add new Post
        </Button>
        <Dialog PaperProps={{
                    style: {
                    backgroundColor: '#616161',
                    boxShadow: 'none',
                    width: '500px',
                    },
                }}
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title">
            <DialogTitle  className={classes.dialogText} id="form-dialog-title">Create a Post</DialogTitle>
              <DialogContent >
                <CssTextField
                InputProps={{
                    className: classes.titleField
                  }}
                    label="Title"
                    variant="outlined"
                    id="custom-css-outlined-input"
                    onChange={(e) => setTitle(e.target.value)}

                    />
                  <br/>
                  <CssTextField
                InputProps={{
                    className: classes.postField
                  }}
                    label="Text(Optional)"
                    variant="outlined"
                    id="custom-css-outlined-input"
                    onChange={(e) => setContent(e.target.value)}

                    />

              </DialogContent>
            <DialogActions>
                <Button className={classes.dialogText} onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button className={classes.dialogText} onClick={handleSubmit} color="primary">
                    Post
                </Button>
            </DialogActions>
        </Dialog>
      </div>
  );
}

export default NewPost;