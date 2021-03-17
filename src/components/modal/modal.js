import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import CloseButton from '../closeButton/closeButton'

function Modal({isToggled, children, toggleModal }) {
    return (
        <AnimatePresence className="modal">
         {isToggled &&
            <motion.div className="modal__overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <CloseButton handleClose={toggleModal} />
                <div className="modal__container">
                    
                        {children}
                </div>
            </motion.div>

         }
        </AnimatePresence>
    )
}

export default Modal