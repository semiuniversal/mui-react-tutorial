import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import MenuIcon from '@material-ui/icons/Menu';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import { purple, green } from '@material-ui/core/colors';
import 'fontsource-roboto';
import {
  Container,
  IconButton,
  Toolbar,
  Typography,

} from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles({
  root: {
    background: `linear-gradient(45deg, #FE6888, #FF8336)`,
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px',
    marginBottom: 15,
  },
});

const myTheme = createMuiTheme({
  typography: {
    h2: { fontSize: '2.9rem', marginBottom: 48 },
  },
  palette: {
    primary: {
      main: purple[900],
    },
    secondary: {
      main: green[300],
    },
  },
});

const ButtonStyled = () => {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
};

const CheckBoxExample = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'secondary checkbox',
          }}
          icon={<SaveIcon />}
          checkedIcon={<SaveIcon />}
        />
      }
      label='testing Checkbox'
    />
  );
};

const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <Container maxWidth='md'>
        <div className='App'>
          <header className='App-header'>
            <AppBar color='secondary'>
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant='h6'>MUI Theming</Typography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>
            <Typography variant='h2' component='div'>
              Welcome to MUI
            </Typography>
            <Typography variant='subtitle1'>
              Learning how to use Material UI
            </Typography>
            <ButtonStyled />
            <TextField
              variant='outlined'
              color='secondary'
              type='email'
              label='Email'
              placeholder='your-email@example.com'
            />
            <Grid container spacing={4} justify='center'>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
            </Grid>
            <CheckBoxExample />
            <ButtonGroup size='large' color='primary' variant='contained'>
              <Button href='#' startIcon={<SaveIcon />}>
                Save
              </Button>
              <Button href='#' startIcon={<DeleteIcon />}>
                Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className='App-logo' alt='logo' />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default App;
