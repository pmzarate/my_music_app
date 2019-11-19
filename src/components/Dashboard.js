import React, { Component } from 'react';
import SimpleSelect from '../components/soundSelect'
// import AppBar from '@material-ui/core/AppBar';
//  import { makeStyles } from '@material-ui/core/styles';
// // import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import {Card, CardActions, CardContent} from '@material-ui/core';
// import ConnectSwitch from './connectSwitch';
// import VolumeSlider from './volumeSlider';
// import SoundSelect from './soundSelect';

// const useStyles = makeStyles(theme => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
//   }));



class Dashboard extends Component {

constructor(props) {
    super(props);
    this.state = {
        notifications : ''
    };
}
    
// AutoGrid() {
//     const classes = useStyles();
//     }


render() {
    return (
            <div>
                <p>testing</p>
                <SimpleSelect/>

                {/* <Grid container spacing=   {24} style={{padding:24}}>
                       */}
                               
                {/* <Card className={classes.card1}>
                    <CardContent>
                       
                        <p>you are connected</p>
                    </CardContent>
                    <CardActions>
                        {/* <ConnectSwitch/> */}
                    {/* </CardActions>
                </Card>
                <Card className={classes.Card2}>
                <CardContent>
                        <p>how loud do you want it?</p>
                    </CardContent>
                    <CardActions> */}
                        {/* <VolumeSlider/> */}
                    {/* </CardActions> */} 
                {/* </Card>
                <Card className={classes.card3npm start}>
                <CardContent>
                        <p>what quality do you want?</p>
                    </CardContent>
                    <CardActions> */}
                        {/* <SoundSelect/> */}
                    {/* </CardActions>
                </Card>
                </Grid> */}
            </div>
        )
    }

}

export default Dashboard
