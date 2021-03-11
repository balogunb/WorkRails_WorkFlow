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
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
      width: 800,
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
  shortText:{
    '& > *': {
      margin: theme.spacing(0),
      width: '70ch',
    },
  },
  longText:{
    '& > *': {
      margin: theme.spacing(0),
      width: '90ch',
    },
  },
  dropDown:{
    '& > *': {
      margin: theme.spacing(0),
      width: '40ch',
    },
  },
  
  buttonGroup: {
    width: "100%",
    height: 60,
    backgroundColor: "#F6F6F6",
    margin: "10px 0",
  },
  radioGroup: {
    width: "100%",
    color: "#858585",
    margin: ".1px 0",
    "&$checked": {
      color: "#EFFBFF",
    },
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

function repeatFalse(num) {
  return Array(num).fill(false);
}

function getQuestions(data) {
  if (!data) return; //check if data has been loaded
  var qsts = [];
  data.step1.map(function name(value, index) {
    if (value.question) {
      qsts.push(value.question);
    }
    return null;
  });

  data.step2.map(function name(value, index) {
    if (value.question) {
      qsts.push(value.question);
    }
    return null;
  });

  data.step3.map(function name(value, index) {
    if (value.question) {
      qsts.push(value.question);
    }
    return null;
  });
  //qsts.forEach(element=> console.log(element));
  return qsts;
}

function getAns(
  data,
  selectedIndexStep1,
  selectedIndexStep2,
  selectedIndexStep3
) {
  if (!data) return; //check if data has been loaded
  var ans = [];

  data.step1.map(function name(value, index) {
    if (value.options) {
      ans.push(value.options[selectedIndexStep1[index].value].string);
    }
    return null;
  });

  data.step2.map(function name(value, index) {
    if (value.options) {
      ans.push(value.options[selectedIndexStep2[index].value].string);
    }
    return null;
  });

  data.step3.map(function name(value, index) {
    if (value.options) {
      ans.push(value.options[selectedIndexStep3[index].value].string);
    }
    return null;
  });
  //ans.forEach(element=> console.log(element));
  return ans;
}

function buttonList(
  data,
  value,
  num,
  classes,
  selectedIndexStep1,
  handleListItemClickStep1
) {
  return (
    <List component="nav" aria-label="main mailbox folders">
      {value.options.map(function (value, index) {
        return (
          <ListItem
            button
            key={index}
            name={num}
            className={classes.buttonGroup}
            selected={
              selectedIndexStep1[num] && selectedIndexStep1[num].value === index
            }
            onClick={(event) => handleListItemClickStep1(event, index, num)}
          >
            <ListItemText primary={value.string} />
          </ListItem>
        );
      })}
    </List>
  );
}

function dropDownList(
  data,
  value,
  num,
  classes,
  selectedIndexStep1,
  handleListItemClickStep1
) {
  return (
    <TextField
          id="drop-down"
          select
          className={classes.dropDown}
          defaultValue="Pick from dropdown"
          
        >
      {value.options.map(function (value, index) {
        return (
          <MenuItem 
            key={index} 
            value={value.string} 
            name={num}
            className={classes.dropDown}
            selected={
              selectedIndexStep1[num] && selectedIndexStep1[num].value === index
            }
            onChange={(event) => handleListItemClickStep1(event, index, num)}
             >
              {value.string} 
            </MenuItem>
        );
      })}
    </TextField>
  );
}

function datePicker(
  data,
  value,
  num,
  classes,
  selectedIndexStep1,
  handleListItemClickStep1
) {
  return (
    <TextField
          id="drop-down"
          select
          className={classes.dropDown}
          defaultValue="Pick from dropdown"
          
        >
      {value.options.map(function (value, index) {
        return (
          <MenuItem 
            key={index} 
            value={value.string} 
            name={num}
            className={classes.dropDown}
            selected={
              selectedIndexStep1[num] && selectedIndexStep1[num].value === index
            }
            onChange={(event) => handleListItemClickStep1(event, index, num)}
             >
              {value.string} 
            </MenuItem>
        );
      })}
    </TextField>
  );
}

function radioList(
  data,
  value,
  num,
  classes,
  selectedIndexStep1,
  handleListItemClickStep1
) {
  return (
    <FormControl component="nav" aria-label="main mailbox folders">
      <RadioGroup>
        {value.options.map(function (value, index) {
          return (
            <FormControlLabel
              button
              value={index}
              name={num}
              control={<Radio />}
              label={value.string}
              className={classes.radioGroup}
              checked={
                selectedIndexStep1[num] &&
                selectedIndexStep1[num].value === index
              }
              onChange={(event) => handleListItemClickStep1(event, index, num)}
            >
              <ListItemText primary={value.string} />
            </FormControlLabel>
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}

function shortTextField(
  data,
  value,
  num,
  classes,
  selectedIndexStep1,
  handleListItemClickStep1
) {
  return (
    <form className={classes.shortText} noValidate autoComplete="off">
      <TextField id="outlined-basic"  variant="filled"/>
    </form>
  );
}

function longTextField(
  data,
  value,
  num,
  classes,
  selectedIndexStep1,
  handleListItemClickStep1
) {
  return (
    <form className={classes.longText} noValidate autoComplete="off">
      <TextField id="filled-multiline-static" multiline rows={10} variant="filled"/>
    </form>
  );
}

export default function Main(props) {
  var data = props.data;
  var questions = getQuestions(data);

  //Allow multi select to work dynamically even when options are increased
  let today = new Date(Date.now());
  today = today.toISOString().split("T")[0];
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedIndexStep2, setSelectedIndexStep2] = React.useState({});
  const [selectedIndexStep1, setSelectedIndexStep1] = React.useState({});
  const [selectedIndexStep3, setSelectedIndexStep3] = React.useState({});
  const [date, setDate] = React.useState(today);

  var step3Options = 0;

  //Handles case before data loads
  const [activeElements, setActiveElements] = React.useState(
    repeatFalse(step3Options)
  );
  let query = useQuery();

  //Handles case before data loads
  if (data === null) {
    return (
      <Router>
        <React.Fragment>
          <CssBaseline />
          <main className={classes.layout}>
            <Paper className={classes.paper}></Paper>
          </main>
        </React.Fragment>
      </Router>
    );
  }

  //Handles sending informaiton to salesforce
  const onsubmit = () => {
    console.log("submitting");

    setActiveStep(activeStep + 1);
    //send information to salesforce
    var qId = query.get("qId");
    var cId = query.get("cId");
    console.log(qId);
    console.log(cId);

    var finalData = [];

    questions.forEach(function (value, index) {
      var curr = {
        question: value,
        answer: answers[index],
      };
      finalData.push(curr);
    });

    console.log(finalData);

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cId: cId,
        qId: qId,
        qna: finalData,
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

  const handleListItemClickStep1 = (event, index, num) => {
    setSelectedIndexStep1({
      ...selectedIndexStep1,
      [num]: {
        value: index,
      },
    });
  };
  const handleListItemClickStep2 = (event, index, num) => {
    setSelectedIndexStep2({
      ...selectedIndexStep2,
      [num]: {
        value: index,
      },
    });
  };
  const handleListItemClickStep3 = (event, index, num) => {
    setSelectedIndexStep3({
      ...selectedIndexStep3,
      [num]: {
        value: index,
      },
    });
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    window.scrollTo(0, 0);
  };

  if (activeStep === 0) {
    return (
      <Router>
        <React.Fragment>
          <CssBaseline />
          <main className={classes.layout}>
            <Paper className={classes.paper}>
              <Typography
                variant="h5"
                align="center"
                color="primary"
                gutterBottom
              >
                {data.title}
              </Typography>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <React.Fragment>
                <React.Fragment>
                  {data.step1.map(function (value, num) {
                    if (value.information) {
                      return (
                        <div>
                          <Typography variant="body1" gutterBottom key={num}>
                            {value.information}
                            <Box m={2}></Box>
                          </Typography>
                        </div>
                      );
                    } else {
                      return (
                        <div>
                          <Typography variant="h6" gutterBottom>
                            <Box fontWeight="fontWeightBold">
                              {value.question}
                            </Box>
                          </Typography>
                          {dropDownList(
                            data,
                            value,
                            num,
                            classes,
                            selectedIndexStep1,
                            handleListItemClickStep1
                          )}
                        </div>
                      );
                    }
                  })}
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
            <Typography
              variant="h5"
              align="center"
              color="primary"
              gutterBottom
            >
              {data.title}
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {data.step2.map(function (value, num) {
                if (value.information) {
                  return (
                    <div>
                      <Typography variant="body1" gutterBottom key={num}>
                        {value.information}
                        <Box m={2}></Box>
                      </Typography>
                    </div>
                  );
                } else {
                  return (
                    <div>
                      <Typography variant="h6" gutterBottom>
                        <Box fontWeight="fontWeightBold">{value.question}</Box>
                      </Typography>
                      {buttonList(
                        data,
                        value,
                        num,
                        classes,
                        selectedIndexStep2,
                        handleListItemClickStep2
                      )}
                    </div>
                  );
                }
              })}
            </React.Fragment>
            <React.Fragment>
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
            <Typography
              variant="h5"
              align="center"
              color="primary"
              gutterBottom
            >
              {data.title}
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              <React.Fragment>
                {data.step3.map(function (value, num) {
                  if (value.information) {
                    return (
                      <div>
                        <Typography variant="body1" gutterBottom key={num}>
                          {value.information}
                          <Box m={2}></Box>
                        </Typography>
                      </div>
                    );
                  } else {
                    return (
                      <div>
                        <Typography variant="h6" gutterBottom>
                          <Box fontWeight="fontWeightBold">
                            {value.question}
                          </Box>
                        </Typography>
                        {buttonList(
                          data,
                          value,
                          num,
                          classes,
                          selectedIndexStep3,
                          handleListItemClickStep3
                        )}
                      </div>
                    );
                  }
                })}
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
    var answers = getAns(
      data,
      selectedIndexStep1,
      selectedIndexStep2,
      selectedIndexStep3
    );
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography
              variant="h5"
              align="center"
              color="primary"
              gutterBottom
            >
              {data.title}
            </Typography>
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
                    {questions.map(function (value, index) {
                      return (
                        <ListItem className={classes.listItem}>
                          <ListItemText primary={value} />
                          <Typography className={classes.total}>
                            <Box fontWeight="900">{answers[index]}</Box>
                          </Typography>
                        </ListItem>
                      );
                    })}
                  </List>
                </div>
                <Typography variant="h6" gutterBottom>
                  Customer Info
                </Typography>
                <div className={classes.root}>
                  <List disablePadding>
                    <ListItem className={classes.listItem}>
                      <ListItemText primary="Name" />
                      <Typography className={classes.total}>
                        <Box fontWeight="900">Jack Rodgers</Box>
                      </Typography>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <ListItemText primary="Customer Number" />
                      <Typography className={classes.total}>
                        <Box fontWeight="900">645</Box>
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
                  onClick={(event) => onsubmit(answers)}
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
  } else {
    return (
      <Router>
        <React.Fragment>
          <CssBaseline />
          <main className={classes.layout}>
            <Paper className={classes.paper}>
              <Typography
                variant="h3"
                align="center"
                color="primary"
                gutterBottom
              >
                Thank you for submiting
              </Typography>
            </Paper>
          </main>
        </React.Fragment>
      </Router>
    );
  }
}
