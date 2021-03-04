

import 'antd/dist/antd.css';

import CustomLayout from './containers/Layout';
// import ArticleList from './containers/ArticleListView';
import BaseRouter from './routes';

import { BrowserRouter as Router } from 'react-router-dom';

import { connect } from 'react-redux'
import * as actions from './store/actions/auth'
import { Component } from 'react';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <CustomLayout {...this.props}>
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 
