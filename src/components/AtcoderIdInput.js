import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
      label="atcoder id"
      value={atcoderId}
      onChange={handleChange}
      variant="outlined"
      size="small"
    />
    <Button 
      variant="outlined"
      color="primary"
      href={"#/users/"+atcoderId}
      size="large"
    >
      go
    </Button>
  </div>
);
}