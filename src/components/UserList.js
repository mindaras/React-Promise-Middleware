import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../actions/actionCreators';
import '../styles/UserList.css';

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser(user, i) {
    return (
      <div key={i} className="user">
        <h3 className="user__name">{user.name}</h3>
        <p className="user__position">{user.company.name}</p>
        <a href={user.website} className="user__website">Website</a>
      </div>
    );
  }

  render() {
    return (
      <div className="user-list">
        {this.props.users.map(this.renderUser)}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    users: reduxState.users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchUsers
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
