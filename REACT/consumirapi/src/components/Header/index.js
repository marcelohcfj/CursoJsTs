/* eslint-disable */
import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt, FaCircle, FaPowerOff } from 'react-icons/fa';
import { Nav } from './styled';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';
import { toast } from 'react-toastify';

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = e => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
  }

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/register">
        <FaUserAlt size={24} />
      </Link>
      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/logout">
          <FaPowerOff size={24} />
        </Link>
      ) : (
        <Link to="/login">
          <FaSignInAlt size={24} />
        </Link>
      )}

      {isLoggedIn && <FaCircle size={24} color="#66FF33" />}
    </Nav>
  );
}
