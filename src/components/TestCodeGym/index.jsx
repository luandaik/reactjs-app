import React, { useState } from 'react';
import './styles.scss';
TestCodeGym.propTypes = {};

function TestCodeGym(props) {
  const [count,setCount] = useState(0);
  const students = [
    {
      company: 'Alfreds Futterkiste',
      contact: 'Maria Anders',
      country: 'Germany',
    },
    {
      company: 'Centro comercial Moctezuma',
      contact: 'Francisco Chang',
      country: 'Mexico',
    },
    {
      company: 'Ernst Handel',
      contact: 'Roland Mendel',
      country: 'Austria',
    },
    {
      company: 'Island Trading',
      contact: 'Helen Bennett',
      country: 'UK',
    },
    {
      company: 'Laughing Bacchus Winecellars',
      contact: 'Yoshi Tannamuri',
      country: 'Canada',
    },
    {
      company: 'Magazzini Alimentari Riuniti',
      contact: 'Giovanni Rovelli',
      country: 'Italy',
    },
  ];
  
  return (
    <>
      <h1>Bai 1</h1>
      <h4>Browser's details: {navigator.userAgent}</h4>,
      <div>
        <h2>Bai 2</h2>
        <h2>Students</h2>
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr>
                <td>{student.company}</td>
                <td>{student.contact}</td>
                <td>{student.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container">
        <h1>Bai 3</h1>
        <div className="card">
          <div className="card--header" />
          <img
            className="avatar"
            src="https://media.baodautu.vn/Images/chicuong/2019/07/27/mvl7y4jk.jpg"
            alt="avatar"
          />
          <div className="card--body">
            <div>
              <p className="text-header">ok ok ok</p>
              <p className="text-sub">Số folow: {count} </p>
              <button className="btn third" onClick={()=>setCount(x=>x+99)} >FOLLOW</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container2 d-flex align-items-center text-center">
          <h1>Bai 4</h1>
        <div className="form-signin">
          <form>
            <img
              className="mb-4"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
              alt=""
              width="72"
              height="57"
            />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
              <input type="email" className="form-control email" id="floatingInput" placeholder="name@example.com" />
              <label>Email address</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control password" id="floatingPassword" placeholder="Password" />
              <label>Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            <button className="w-100  btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default TestCodeGym;
