import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

const Home = () => {
  return (
    <motion.div
      className="home container"
      initial={{ x: -250, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: .5}}
    >
      <motion.h1 
        animate={{}}
      >
        This is the start of something new
      </motion.h1>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="whileHover" 
        >
          Start
        </motion.button>
      </Link>
    </motion.div>
  );
}

export default Home;