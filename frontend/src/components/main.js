import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
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
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  root: {
    width: "100%",
    color: "#858585",
  },
  buttonGroup: {
    width: "100%",
    height: 60,
    backgroundColor: "#F6F6F6",
    margin: "10px 0",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
  },
}));

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Main() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState();
  const [date, setDate] = React.useState("2020-12-08");
  const [activeElements, setActiveElements] = React.useState([
    false,
    false,
    false,
    false,
  ]);
  let query = useQuery();


  //Handles sending informaiton to salesforce
  const onsubmit = () => {
    //send information to salesforce
    var qId = query.get("qId");
    var cId = query.get("cId");

    var res = [
      {
        question: "What modules are you looking to implement?",
        answer: getModule(),
      },
      {
        question: "When are you expecting delivery?",
        answer: getDeliveryCost(),
      },
      {
        question: "What resources do you believe you would need?",
        answer: getResourceCost(),
      },
    ];

    console.log(getModule());
    console.log(getDeliveryCost());
    console.log(getResourceCost());
    console.log(qId);
    console.log(cId);

    const requestOptions = {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        cId: cId,
        qId: qId,
        qna: res
       }),
    };

    fetch("http://localhost:3001/update", requestOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handleChanges = (event, index) => {
    activeElements[index] = !activeElements[index];
    setActiveElements([...activeElements]);
  };

  const getModule = () => {
    var lst = ["4 Weeks", "6 Weeks", "8 weeks"];
    return lst[selectedIndex];
  };

  const getDeliveryCost = () => {
    var today = Date.now();
    var deliveryDate = new Date(date);
    var diff = parseInt((deliveryDate - today) / (1000 * 60 * 60 * 24), 10);

    if (diff < 7) {
      return "$" + 5000;
    }
    return "$" + 1000;
  };

  const getResourceCost = () => {
    var res = 0;
    var x;
    for (x in activeElements) {
      if (activeElements[x] === true) {
        res += 1000;
        //console.log(x);
      }
    }
    return "$" + res;
  };

  if (activeStep === 0) {
    return (
      <Router>
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
                    {activeStep === steps.length - 1 ? "Donate" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            </Paper>
          </main>
        </React.Fragment>
      </Router>
    );
  } else if (activeStep === 1) {
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
                  When are you expecting delivery?
                </Typography>
                <div className={classes.root}>
                  <form className={classes.container} noValidate>
                    <TextField
                      id="date"
                      type="date"
                      value={date}
                      onChange={handleDate}
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </form>
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
                  {activeStep === steps.length - 1 ? "Donate" : "Next"}
                </Button>
              </div>
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  } else if (activeStep === 2) {
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
                  What resources do you believe you'll need?
                </Typography>
                <div className={classes.root}>
                  <List component="nav" aria-label="main mailbox folders">
                    <ListItem
                      button
                      className={classes.buttonGroup}
                      onClick={(event) => handleChanges(event, 0)}
                      selected={activeElements[0]}
                    >
                      <ListItemText primary="Project Manager" />
                    </ListItem>
                    <ListItem
                      button
                      className={classes.buttonGroup}
                      onClick={(event) => handleChanges(event, 1)}
                      selected={activeElements[1]}
                    >
                      <ListItemText primary="Solution Architect" />
                    </ListItem>
                    <ListItem
                      button
                      onClick={(event) => handleChanges(event, 2)}
                      className={classes.buttonGroup}
                      selected={activeElements[2]}
                    >
                      <ListItemText primary="Implementation Manager" />
                    </ListItem>
                    <ListItem
                      button
                      onClick={(event) => handleChanges(event, 3)}
                      className={classes.buttonGroup}
                      selected={activeElements[3]}
                    >
                      <ListItemText primary="QA Tester" />
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
                  {activeStep === steps.length - 1 ? "Donate" : "Next"}
                </Button>
              </div>
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  } else if (activeStep === 3) {
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
                  Review
                </Typography>
                <div className={classes.root}>
                  <List disablePadding>
                    <ListItem className={classes.listItem}>
                      <ListItemText primary="Module Duration" />
                      <Typography variant="subtitle1" className={classes.total}>
                        {getModule()}
                      </Typography>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <ListItemText primary="Delivery Fee" />
                      <Typography variant="subtitle1" className={classes.total}>
                        {getDeliveryCost()}
                      </Typography>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <ListItemText primary="Resource Fee" />
                      <Typography variant="subtitle1" className={classes.total}>
                        {getResourceCost()}
                      </Typography>
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
                  onClick={onsubmit}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
              </div>
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}
