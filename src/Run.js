import React, { Component } from 'react';
import { Login } from "./pages"
import App from './App';
import AppPimpinan from './AppPimpinan';
import { connect } from "react-redux"

class Run extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  showPage = () => {
    if (this.props.checkLogin == true && this.props.dataUserLogin.role == "Admin") {
        console.log("isLogin", this.props.checkLogin)
        console.log("Role", this.props.dataUserLogin.role)
       return <App></App>
    }else if(this.props.checkLogin == true && this.props.dataUserLogin.role == "Pimpinan"){
        return <AppPimpinan/>
    }else{
      return <Login></Login>
    }
}

  render() {
    return (
      <>
      {this.showPage()}
      </>
    );
  }
}

const mapStateToProps = state => ({
  checkLogin: state.AReducer.isLogin,
  dataUserLogin: state.AReducer.userLogin
})

const mapDispatchToProps = dispatch => {
  return {
    keluar: () => dispatch({ type: "LOGOUT_SUCCESS" }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Run);