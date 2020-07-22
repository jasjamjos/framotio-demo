import React from 'react';
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
      mass: 0.4,
      damping: 8,
      type: 'spring',
      when: "beforeChildren",
      staggerChildren: 0.4
    }
  }
};

const childVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
  }
}

const Order = (props) => {
  const { pizza } = props;
  return (
    <motion.div
      className="order container"
      variants={ containerVariants }
      initial="initial"
      animate="animate"
    >
      <h2>Thank you for your order :x</h2>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div
        variants={childVariants}
      >
        {pizza.toppings.map((topping) => <div key={topping}>{ topping }</div>)}
      </motion.div>
    </motion.div>
  );
}

export default Order;