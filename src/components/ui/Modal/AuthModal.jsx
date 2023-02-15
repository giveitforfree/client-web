import { ProviderId } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { authAction } from "../../../redux/actions/authAction";

import "./modal.scss";

const AuthModal = ({ setShowModal, login = "", onSubmit }) => {
  const [createAccount, setCreateAccount] = useState(false)
  const [fieldErrors, setFieldErrors] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    c_password: '',
  });

  const $onSubmitHandle = () => {
    let _fieldErrors = {};
    if (createAccount) {
      Object.keys(credentials).forEach(field => {
        if (credentials[field] === '') {
          _fieldErrors[field] = `${field} is required !`;
        } else {
          delete _fieldErrors[field]
        }
      });
      if (credentials['c_password'] !== credentials['password']) {
        _fieldErrors['match'] = `password is not match !`;
      }
    } else {
      Object.keys(credentials).filter(el => !['c_password'].includes(el)).forEach(field => {
        if (credentials[field] === '') {
          _fieldErrors[field] = `${field} is required !`;
        } else {
          delete _fieldErrors[field]
        }
      });
    }
    if (Object.keys(_fieldErrors).length > 0) {
      setFieldErrors(_fieldErrors);
      return;
    } else {
      setFieldErrors({})
    }

    onSubmit && onSubmit({ ...credentials, isSignin: !createAccount, signInProvider: ProviderId.PASSWORD, });
  };

  const onHandleAuthByProvider = async provider => {
    const result = await dispatch(authAction({ isSignin: !createAccount, signInProvider: provider }))
    if (result) {
      setShowModal('')
      navigate('/create')
    }
  }

  const onSetCredentials = (fieldName, value = "") => {
    setCredentials({ ...credentials, [fieldName]: value });
  };

  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <div className="modal-header">
          <span className="close__modal">
            <i className="ri-close-line" onClick={() => setShowModal("")}></i>
          </span>
          <h6 className="d-flex align-center justify-content-center text-light"> {login} </h6>
        </div>

        <div className="form-inputs mt-4">
          <div className="input__item my-3">
            <input
              type="text"
              autoComplete="off"
              autoFocus={true}
              placeholder="Enter username"
              onChange={(event) =>
                onSetCredentials("username", event?.target?.value)
              }
            />
            {fieldErrors['username'] &&
              <span className="text-danger">
                {fieldErrors['username']}
              </span>}
          </div>

          <div className="input__item my-3">
            <input
              type="password"
              autoComplete="off"
              placeholder="Enter password"
              onChange={(event) =>
                onSetCredentials("password", event?.target?.value)
              }
            />
            {fieldErrors['password'] &&
              <span className="text-danger">
                {fieldErrors['password']}
              </span>}
          </div>

          {createAccount && <div className="input__item my-3">
            <input
              type="password"
              autoComplete="off"
              placeholder="Confirm password"
              onChange={(event) =>
                onSetCredentials("c_password", event?.target?.value)
              }
            />
            {fieldErrors['c_password'] &&
              <span className="text-danger">
                {fieldErrors['c_password']}
              </span>}
            {fieldErrors['match'] &&
              <span className="text-danger">
                {fieldErrors['match']}
              </span>}
          </div>}
        </div>

        <button onClick={() => $onSubmitHandle()} className="place__bid-btn">
          {createAccount ? "Sign Up" : 'Sign In'}
        </button>

        <div className="mt-4">
          <p className="text-center">Or {createAccount ? "sign up" : 'sign in'} with:</p>
          <div className="d-flex justify-content-center gap-4 mt-3 signin-provider ">
            {/* <Button size="sm" onClick={() => onHandleAuthByProvider(ProviderId.FACEBOOK)}>
              <i className="ri-facebook-circle-fill"></i>
            </Button> */}
            <Button size="sm" onClick={() => onHandleAuthByProvider(ProviderId.GOOGLE)}>
              <i className="ri-google-fill"></i>
            </Button>
            {/* <Button size="sm" onClick={() => onHandleAuthByProvider(ProviderId.TWITTER)}>
              <i className="ri-twitter-fill"></i>
            </Button>
            <Button size="sm">
              <i className="ri-github-fill"></i>
            </Button> */}
          </div>
        </div>

        <div className="mt-4">
          <h6 className="text-center text-light  ">
            {createAccount ? "already you have your donation account ?" : "You don't have your donation account ?"}
            <br />
            <span className="mt-2 create__account"
              onClick={() => setCreateAccount(val => !val)}
              type="button"> {createAccount ? 'Sign in' : 'Create one'} </span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
