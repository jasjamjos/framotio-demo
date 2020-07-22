import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  initial: {
    opacity: 0,
    x: '100vw'
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5
    }
  }
};

const startVariants = {
  initial: {
    x: '-100vw'
  },
  animate: {
    x: 25, type: 'spring',
    stiffness: 120 
  }
};

const buttonVariants = {
  whileHover: {
    scale: 1.1,
    textShadow: '0px 0px 8px #eee444',
    boxShadow: '0px 0px 8px #eee444',
    transition: {
      duration: 0.2,
      yoyo: Infinity
    }
  }
}

const Base = (props) => {
  const { addBase, pizza } = props;
  const bases = [
    'Classic',
    'Thin Crust',
    'Thick Crust'
  ];

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <h3>Step 1: Choose your base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? 'active': '';
          return (
            <motion.li
              whileHover={{ 
                scale: 1.3,
                originX: 0,
                color: '#eee444'
              }}
              transition={{ type: 'spring', stiffness: 300}}
              key={ base } 
              onClick={() => addBase(base)}
            >
              <span class={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>
      {pizza.base && (
        <motion.div
          variants={startVariants}
        >
          <Link to="/toppings">
            <motion.button
            variants={buttonVariants}
              whileHover="whileHover"
              type="button" 
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Base;