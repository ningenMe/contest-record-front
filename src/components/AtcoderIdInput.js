import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '40ch',
    },
  },
}));

export default function StateTextFields() {
  const classes = useStyles();
  const [atcoderId, setAtcoderId] = React.useState('');
  const handleChange = (event) => {
    setAtcoderId(event.target.value);
  };

  return (
  <div>
    <TextField
      required
      id="outlined-name"
      label="atcoder_id"
      value={atcoderId}
      onChange={handleChange}
      variant="outlined"
    />
    <Link to={"/users/"+atcoderId}><button class="btn btn-primary">go</button></Link>
  </div>
);
}