import React, {Component} from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


constructor(props) {
  super(props);
  this.state = {isConnected : false,}
}

class ConnectSwitch extends Component() {
  const [isConnected, setConnection] = {React.useState(false);
  }
  const toggleChecked = () => {
    setConnection(prev => !prev);
  }

  return () {
    <FormGroup>
        <FormControlLabel
        control={<Switch checkedisConnected={isConnected} onChange={toggleChecked} />}
        label="Normal"
      />
    </FormGroup>
  };
}
export default ConnectSwitch