import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



function Second() {

    const [valueF, setValueF] = React.useState('1');
    const handleChangeF = (event) => {
    setValueF(event.target.value);
    };
  return(
        <FormControl component="fieldset">
          <h1>  </h1>
          <Typography variant="h6">
            Frequency
          </Typography>
          <RadioGroup 
            aria-label="DonationFrequency"  
            name="DonationFrequency" 
            value={valueF} 
            onChange={handleChangeF}
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Monthly" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Quarterly" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Yearly" />
          </RadioGroup>
        </FormControl>
    );
}

export default function DonationType() {

  const [value, setValue] = React.useState('True');
  let sec;

  if(value === 'False') {
    sec = <Second/>
  }



  const handleChange = (event) => {
    setValue(event.target.value);



  };





  return (
    <div>
      <Grid
       container
       direction="column"
       justify="space-around"
       alignItems="flex-start"
      >

        <FormControl component="fieldset">
          <h1>  </h1>
          <Typography variant="h6">
            Donation Type
          </Typography>
          <RadioGroup 
            aria-label="DonationType"  
            name="DonationType" 
            value={value} 
            onChange={handleChange}
          >
            <FormControlLabel value="True" control={<Radio color='primary'/>} label="One Time Donation" />
            <FormControlLabel value="False" control={<Radio color='primary'/>} label="Recurring Donation" />
          </RadioGroup>
        </FormControl>
        {sec}
      </Grid>
    </div>


  );
}