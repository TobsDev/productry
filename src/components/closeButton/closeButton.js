import React from 'react';
import CloseSvg from '../../images/icon-close.svg'
import  { CgClose } from 'react-icons/cg'
import { motion } from 'framer-motion'


const CloseButton = ({handleClose}) => {
    return (
        <motion.div
            onClick={handleClose}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20.39 20.39"
            className="closeButton"
            whileHover={{ 
                scale: 1.4,
                backgroundColor: 'rgb(0,0,0,0.1)'}}
          >
            <CgClose />
            <title>close</title>
          </motion.div>
    )
}

export default CloseButton