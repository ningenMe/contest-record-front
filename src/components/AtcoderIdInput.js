import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";

export default function StateTextFields() {
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