import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

function PrivateRoute ({ children, user, ...rest }) {
  console.log('PrivateRoute this.props.user', user.token);
  return (
    <Route
      {...rest}
      render={({ location }) => 
      {
        console.log('component', user.token);
        return !!user.token ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
      }
    />
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}
export default connect(mapStateToProps)(PrivateRoute)

