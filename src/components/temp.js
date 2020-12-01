import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Review from './review.js';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
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




const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <ProposalPage />;
//     case 1:
//       return <AddressForm />;
//     case 2:
//       return <PaymentForm />;
//     case 3:
//       return <Review />;
//     default:
//       throw new Error('Unknown step');
//   }
// }

export default function Main() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };



  if(activeStep === 0){
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
          <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
            <StepLabel>{label}</StepLabel>
            </Step>
            ))}
          </Stepper>
          <React.Fragment>
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
          <div className={classes.buttons}>
          {activeStep !== 0 && (
            <Button onClick={handleBack} className={classes.button}>
            Back
            </Button>
            )}
            <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
            >
            {activeStep === steps.length - 1 ? 'Donate' : 'Next'}
            </Button>
            </div>
            </React.Fragment>
            </Paper>
          </main>
        </React.Fragment>
        )
        }
        else if (activeStep === 1){
          return(
            <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
          <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
            <StepLabel>{label}</StepLabel>
            </Step>
            ))}
          </Stepper>
          <React.Fragment>
          <React.Fragment>
          <Typography variant="h6" gutterBottom>
          When are you expecting delivery?
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
          <div className={classes.buttons}>
          {activeStep !== 0 && (
            <Button onClick={handleBack} className={classes.button}>
            Back
            </Button>
            )}
            <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
            >
            {activeStep === steps.length - 1 ? 'Donate' : 'Next'}
            </Button>
            </div>
            </React.Fragment>
            </Paper>
          </main>
        </React.Fragment>
            
          );
      }
    }