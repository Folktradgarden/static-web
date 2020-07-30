import React from 'react'
import { motion } from 'framer-motion'

import styles from './nav-button.module.sass'

const NavButton = ({toggle, isOpen, fillColor: fillColor}) => {

    return(
        <motion.div
            className={styles.root}
            initial={false}
            animate={
                isOpen ? "open": "closed"
            }
            >
            <button onClick={toggle} className={styles.button}>
                <svg width="auto" height="auto" viewBox="0 0 23 18">
                    <Path
                        stroke={fillColor}
                        variants={{
                            closed: {
                              d: "M 2 2.5 L 40 2.5"
                            },
                            open: {d: "M 3 16.5 L 17 2.5"}
                        }}
                    />
                    <Path
                        stroke={fillColor}
                        d="M 2 9.423 L 40 9.423"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 }
                        }}
                    />
                    <Path
                        stroke={fillColor}
                        variants={{
                            closed: {d: "M 2 16.346 L 40 16.346"},
                            open: {d: "M 3 2.5 L 17 16.346"}
                        }}
                    />
                </svg>
            </button>
        </motion.div>
    )
}

const Path = props => {

    return(
        <motion.path
            fill="transparent"
            strokeWidth="2.5"
            strokeLinecap="round"
            {...props}
        />
    )

}

export default NavButton