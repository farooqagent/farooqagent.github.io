import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div>
    <h1 style={{ display: 'block', textAlign: 'center', margin: '0 auto', padding: 10 }}>Bye</h1>
    <br />
    <Link  style={{ display: 'block', textAlign: 'center', margin: '0 auto', padding: 10 }} to="/">Go to Page1</Link>
  </div>
);
