import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500 ,
  },
}));

export default function DesignationSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <h1> </h1>
      <Typography variant="h6">
          Designation
      </Typography>
      <FormControl className={classes.formControl}>
        
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={1}>CACLV</MenuItem>
          <MenuItem value={2}>Community Action Development Corporation Allentown</MenuItem>
          <MenuItem value={3}>Community Action Development Committee Bethlehem</MenuItem>
          <MenuItem value={4}>Community Action Financial Services</MenuItem>
          <MenuItem value={5}>Food Policy Council</MenuItem>
          <MenuItem value={6}>Lehigh Valley Community Land Trust</MenuItem>
          <MenuItem value={7}>OnTrack</MenuItem>
          <MenuItem value={8}>Racial and Ethnic Justice</MenuItem>
          <MenuItem value={9}>Rising Tide Community Loan Fund</MenuItem>
          <MenuItem value={10}>Slate Belt Rising</MenuItem>
          <MenuItem value={11}>SHE Program</MenuItem>
          <MenuItem value={12}>Second Harvest Food Bank</MenuItem>
          <MenuItem value={13}>Sixth Street Shelter</MenuItem>
          <MenuItem value={14}>Work Ready</MenuItem>
          <MenuItem value={15}>Weatherization</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}