import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
  return (
    <div>
      <h1>Framotio-demo</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/base">Base</Link>
          </li>
          <li>
            <Link to="/toppings">Toppings</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default header;