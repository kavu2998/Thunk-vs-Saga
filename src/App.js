import './App.css';
import { connect } from 'react-redux';
import { getUsersFetch } from './actions';
//for Thunk demonstration
//import { getUsersRequest } from './thunk';

function App(props) {
  return (
    <div className="App">
      <br />
      {props.users.length === 0 && <button style={{ padding: 15 }} onClick={() => props.fetchUsers()}> Get Users </button>}
      <div style={{ textDecoration: 'underline' }}>Users are: </div>
      <div>{props.users.map((user => (<div key={user.name}>{user.name}</div>)))}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.myFirstReducer.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(getUsersFetch())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
