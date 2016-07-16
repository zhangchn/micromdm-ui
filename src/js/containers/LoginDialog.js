'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as connectionActions from '../actions/connection';
import * as uiActions from '../actions/ui/login';
import LoginDialog from '../components/LoginDialog';

const mapDispatchToProps = (dispatch) => {
  return {
    setEndpoint: bindActionCreators(connectionActions.setEndpoint, dispatch),
    ui: bindActionCreators(uiActions, dispatch)
  };
};

function mapStateToProps (state) {
  return {
    login: state.login
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginDialog);