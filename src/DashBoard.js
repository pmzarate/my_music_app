import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import Dashboard2 from "./DashBoard2";
import Cards from "./Cards";
import Cards2 from "./Cards2";
import Cards3 from "./Cards3";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Switch from "@material-ui/core/Switch";
import CardActions from "@material-ui/core/CardActions";
import Slider from "@material-ui/core/Slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import SimpleSelect from "./SimpleSelect";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      checkedA: true,
      checkedB: true,
      switched: false,
      messages: [],
      systemOff: [],
      volume: [],
      qualityMessages: [],
      quality: 20
    };
  }
  handleSwitched = name => event => {
    console.log(event)
    this.setState({ ...this.state, [name]: event.target.checked });
    if (event.target.checked) {
      let newMessages = this.state.messages
      let index = newMessages.findIndex(
        function(message){
          return message === "application is offline. You won't be able to share or stream music to other devices."
        }
      )
      newMessages.splice(index,1)
      this.setState({ messages:newMessages});
    } else {
      let newMessages = this.state.messages.concat(["application is offline. You won't be able to share or stream music to other devices."])
    
      this.setState({ messages:newMessages});
    }
    
  };
  valueText = value => {
    let index = this.state.messages.indexOf(
      "Too Loud volume can cause harm to your hearing"
    );
    // debugger;
   
    if (value >= 80 && index === -1) {
      let newMessages = this.state.messages.concat(["Too Loud volume can cause harm to your hearing"])
    
      this.setState({ messages:newMessages});

      // debugger;
    }else if(value< 80){    
      let newMessages = this.state.messages
      let index = newMessages.findIndex(
        function(message){
          return message ==="Too Loud volume can cause harm to your hearing"
        }
      )
      newMessages.splice(index,1)
      if(index !== -1){
        this.setState({ messages:newMessages});

      }

    } 
    // debugger;
    return value;
  };
  handleChange = event => {
    let index = this.state.qualityMessages.indexOf("quality bad");
    this.setState({quality: event.target.value})
    if (event.target.value === 10 && index === -1) {
    let newMessages = this.state.messages.concat(["quality start low here and not good if you have hearing problems"])
    
      this.setState({ messages:newMessages});
    } else{   let newMessages = this.state.messages
      let index = newMessages.findIndex(
        function(message){
          return message ==="Too Loud volume can cause harm to your hearing"
        }
      )
      newMessages.splice(index,1)
      if(index !== 10){
        this.setState({ messages:newMessages});

      }

    }

    }
  
  render() {
    console.log(this.state);
    return (
      <div>
        <Dashboard2 />
        <h1 className="welcome">welcome user!</h1>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          height="100%"
        >
          <Card className="card1">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                hello users lets turn on and rock!
              </Typography>
              <Typography variant="h5" component="h3">
                all musics that you love
              </Typography>
              <Typography color="textSecondary">
                here where you start
              </Typography>
              <Typography variant="body2" component="p">
                lets get the job done.
                <br />
                {'"turn on and of "'}
              </Typography>
            </CardContent>
            <CardActions>
              <Switch
                checked={this.state.checked}
                onChange={this.handleSwitched("checkedA")}
                value="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </CardActions>
          </Card>

          {/* Card 2 */}

          <Card className="card2">
            <CardContent>
              <Typography className="title" color="textSecondary" gutterBottom>
                volume
              </Typography>
              <Typography variant="h5" component="h2">
                best quality of sound
              </Typography>
              <Typography color="textSecondary">
                all eletronic and country and pop music
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Slider
                defaultValue={0}
                getAriaValueText={this.valueText}
                aria-labelledby="discrete-slider-small-steps"
                step={10}
                marks
                min={0}
                max={100}
                valueLabelDisplay="auto"
              />
            </CardActions>
          </Card>

          <Card className="card3">
            <CardContent>
              <Typography className="title" color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>

              <Typography className="pos" color="textSecondary">
                adjective
              </Typography>
              <Typography variant="h5" component="h3">
                have great time.
                <br />
                {'"chose your quality"'}
              </Typography>
              <FormControl className="control">
                <Select
                  labelId="select-label"
                  id="simple-select"
                  value={this.state.quality}
                  onChange={this.handleChange}
                >
                  <InputLabel id="select-label">Sound Quality</InputLabel>
                  <MenuItem value={10}>low</MenuItem>
                  <MenuItem value={20}>normal</MenuItem>
                  <MenuItem value={30}>high</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
        <div className="frases"><h1>display cards info here</h1></div>
        {this.state.messages.map(message => {
          return <div className="menssage">{message}</div>;
        })}

      </div>
    );
  }
}

export default Dashboard;
