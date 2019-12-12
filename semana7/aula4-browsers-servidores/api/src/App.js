import React from 'react';
import logo from './logo.svg';
import './App.css';
import BoredAPI from './components/BoredAPI/index';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Styled from 'styled-components';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const Container = Styled.div`
  width:600px;
  margin:20px auto;
  background-color:#D3D3D3;

`

const styles =()=>({
  paper:{
      background: "#FFA500"
  }
})

function App() {
const classes = useStyles();

  return (

    <div className="App">
      <Container>
      
        <Paper className={classes.root}>
          <BoredAPI />
        </Paper>
      </Container>
    </div>
  );
}

export default App;
