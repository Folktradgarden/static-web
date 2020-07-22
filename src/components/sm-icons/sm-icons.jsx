import React from 'react'

import * as styles from './sm-icons.module.sass'
import * as colors from '../../global-styles/colors.scss'

import Facebook from './facebook-icon'
import Instagram from './instagram-icon'

const SMIcons = () => {
    return(
        <div className={styles.root}>
            <div className={styles.iconContainer}>
                <Facebook fillColor={colors.facebookBlue}/>
                <Instagram fillColor={colors.instagramPink}/>
            </div>
        </div>
    )
}

export default SMIcons