import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const header = () => {
  return (
    <motion.div
      className="header"
      initial={{ y: -250}}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 120}}
      type
    >
      <Link to="/">
        <h1>Framotio-demo</h1>
      </Link>

      {/* <nav>
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
      </nav> */}
    </motion.div>
  );
}

export default header;