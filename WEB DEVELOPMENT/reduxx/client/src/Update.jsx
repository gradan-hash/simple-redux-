import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import Navbar from "./components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addHello, remove, update } from "./redux/userSlice";
import { updateUser } from "./redux/apiCalls";

function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { userInfo, pending, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser({ name, email }, dispatch);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    // dispatch(remove())
  };
  return (
    <>
      <Navbar />

      <div className="reg">
        <form className="signup-form">
          <div className="form-header">HoneyPot | Update Using redux </div>
          <div className="form-header" onClick={handleDelete}>
            deleteaccount
          </div>
          <div className="form-body">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder={userInfo.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="emailOrPhone">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder={userInfo.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                placeholder="Enter Password"
                id="password"
              />
            </div>
          </div>

          <div className="form-footer">
            <button type="submit" disabled={pending} onClick={handleUpdate}>
              update Account
            </button>
            {error && <span className="error">something went wrong</span>}
            {pending === false && (
              <span className="success">Account updated</span>
            )}
            <p>
              Already have an account?
              <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Update;
