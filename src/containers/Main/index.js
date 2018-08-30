import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Container from '../../styles/Container'
import Form from '../../components/Form';
import GetToken from '../../components/GetToken';
import Repos from '../../components/Repos';
import { clearMessage } from '../../actions';

const mapStateToProps = (state) => {
  return {
    message: state.reducer.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearMessage: () => {
      dispatch(clearMessage())
    }
  }
}

const getModalStyle = () => {
  return {
    top: 50,
    left: 50,
  }
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class MainComponent extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      open: false
    };    
    this.onHandlerModalClose = this.onHandlerModalClose.bind(this);
  }

  onHandlerModalClose () {
    this.props.clearMessage();
    this.setState({
      open:false
    });
  }

  render() {
    const {classes} = this.props;
    return (<Container>
      <GetToken/>
      <Form />
      <Repos />
      <Modal
        aria-labelledby="modal-message"
        aria-describedby="display-messages-from-server"
        open={(this.props.message) ? true : false}
        onClose={this.onHandlerModalClose}
      >
        <div style={getModalStyle()} className={classes.paper}>
          {(this.props.message) ? ((this.props.message.statusText) ? this.props.message.statusText : 'Something went wrong'): ''}
        </div>
      </Modal>
    </Container>);
  }
}

const Main = connect(mapStateToProps, mapDispatchToProps, null)(MainComponent)

const MainPage = withStyles(styles)(Main);

MainComponent.propTypes = {
  message: PropTypes.any,
  classes: PropTypes.object
};

export default MainPage;