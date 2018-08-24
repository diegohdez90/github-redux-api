import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Main from './containers/Main';
import Title from './styledComponents/Title';

import './styles/style.css';
class App extends React.Component {

  render () {
    return (<div>
      <AppBar position='static'>
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Title>
            Github API
          </Title>
        </Toolbar>
      </AppBar>
      <Main />

    </div>);
  }
}

export default App;