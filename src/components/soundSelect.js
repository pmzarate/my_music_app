import React, { Component } from "react";
//t { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


class SimpleSelect extends Component {
     state = {
      values: '',
      notifications: []
  };

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

//  SimpleSelect() {
//   const classes = useStyles();
//   const [quality, setquality] = React.useState('');

  handleSound = event => {
    if(event.target.value === 10){
      this.state.notifications.push("Music quality is degraded. Increase quality if your connection allows it."
      );
    }else{
    }
  this.setState({ values: event.target.value });
};

render() {
      return (
        <div>
            <Card className="Sound-quality">
            <CardContent>
              <Typography variant="h5" component="h2">
                Sound Quality
              </Typography>

              <Typography variant="body2" component="p">
                Manually control the music quality in event of poor connection
              
              </Typography>
            </CardContent>
            <CardActions>
              <Select
                value={this.state.values}
                onChange={this.handleSound}
                displayEmpty
                name="age"
                className="inputSound"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Low</MenuItem>
                <MenuItem value={20}>Normal</MenuItem>
                <MenuItem value={30}>High</MenuItem>
              </Select>
            </CardActions>
          </Card>
      
        <div className="notifications">
          <h1>System Notifications:</h1>
          {this.state.notifications.map(notification => {
            return <p>{notification}</p>;
          })}
        </div>
        </div>
      )
}
}
export default SimpleSelect;