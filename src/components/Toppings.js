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

const Toppings = (props) => {
  const { addTopping, pizza } = props;
  const toppings = ['mushrooms', 'peppers', 'onion', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div
      className="toppings container"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <h1>Toppings</h1>

      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : ''
          return (
            <motion.li
              whileHover={{ 
                scale: 1.3,
                originX: 0,
                color: '#eee444'
              }}
              transition={{ type: 'spring', stiffness: 300}}
              key={topping} 
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}

        <motion.div
          variants={ startVariants }
        >
          <Link to="/order">
          <motion.button
            variants={buttonVariants}
            whileHover="whileHover" 
          >
            Order
          </motion.button>
          </Link>
        </motion.div>
      </ul>
    </motion.div>
  )
}

export default Toppings;