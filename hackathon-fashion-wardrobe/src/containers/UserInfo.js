import React, { Component } from "react";
import { connect } from "react-redux";

class UserInfo extends Component {
  render() {
    let content = null;
    if (!this.props.loggedIn) {
      content = <p> </p>;
    } else if (this.props.user) {
      content = <dl />;
    }

    let error = this.props.error;
    if (error) {
      if (Array.isArray(this.props.error)) {
        error = this.props.error.map(error => <div>{error}</div>);
      }
      error = <div className="alert">{error}</div>;
    }
    return (
      <div className="UserInfo">
        {error}
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.token,
    user: state.user,
    error: state.error
  };
};

export default connect(mapStateToProps)(UserInfo);
