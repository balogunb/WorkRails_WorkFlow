import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
root: {
  width: '100%',
},
group: {
  width: '100%',
  backgroundColor: '#F6F6F6',
  color:'#858585',

},
}));


export default function ProposalPage2() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        What modules are you looking to implement?
      </Typography>
      <div className={classes.root}>
        <List className={classes.group} component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemText primary="Gold" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Silver" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Bronze" />
          </ListItem>
        </List>
      </div>
    </React.Fragment>
  );
}
