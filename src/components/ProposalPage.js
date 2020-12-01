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
  color:'#858585',
},
buttonGroup: {
  width: '100%',
  height: 60,
  backgroundColor: '#F6F6F6',
  margin: '10px 0'
},
}));


export default function ProposalPage() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        What modules are you looking to implement?
      </Typography>
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem 
            button
            className={classes.buttonGroup}
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemText primary="Gold" />
          </ListItem>
          <ListItem 
            button
            className={classes.buttonGroup}
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemText primary="Silver" />
          </ListItem>
          <ListItem 
            button
            className={classes.buttonGroup}
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemText primary="Bronze" />
          </ListItem>
        </List>
      </div>
    </React.Fragment>
  );
}
