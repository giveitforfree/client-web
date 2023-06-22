import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import "./app.css";
import Layout from "./components/Layout/Layout";
import { LOGIN_SUCCESS } from "./redux/actions/types";
import { getCurrentUser } from "./redux/actions/authAction";

function App(props) {
  const { currentUser } = props
  const dispatch = useDispatch()

  useEffect(() => {
    if (!currentUser) {
      const token = localStorage.getItem('token');
      const user = dispatch(getCurrentUser(token))
      dispatch({ type: LOGIN_SUCCESS, payload: user })
    }
  }, [currentUser])



  return (
    <Layout />
  );
}

const mapStateToProps = state => ({ currentUser: state.auth.user || null })
export default connect(mapStateToProps)(App);
