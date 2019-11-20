// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';

// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

// export default function SimpleSelect() {
//   const classes = useStyles();
//   const [quality, setquality] = React.useState('');



//   const handleChange = event => {
//     setquality(event.target.value);
//   };

//   return (
//     <div>
//       <FormControl className={classes.formControl}>
//         <InputLabel id="select-label">Sound Quality</InputLabel>
//         <Select
//           labelId="select-label"
//           id="simple-select"
//           value={quality}
//           onChange={handleChange}
//         >
//           <MenuItem value={10}>lo</MenuItem>
//           <MenuItem value={20}>normal</MenuItem>
//           <MenuItem value={30}>hi</MenuItem>
//         </Select>
//       </FormControl>
//       </div>
//       )
// }