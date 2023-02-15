import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import "./app.css";
import Layout from "./components/Layout/Layout";
import { SET_LOGGED_USER } from "./redux/actions/types";

function App(props) {
  const { currentUser } = props
  const dispatch = useDispatch()

  useEffect(() => {
    if (!currentUser) {
      let user = JSON.parse(localStorage.getItem('user'));
      const token = JSON.parse(localStorage.getItem('token'))
      user = { ...user, token }
      dispatch({ type: SET_LOGGED_USER, payload: user })
    }
  }, [currentUser])



  return (
    <Layout />
  );
}

const mapStateToProps = state => ({ currentUser: state.auth.user || null })
export default connect(mapStateToProps)(App);
