import React from 'react'

const Footer = () => {
    return (
        <footer>
            © {new Date().getFullYear()},
            {` `}
            <a href="https://github.com/Folktradgarden">Folkträdgården</a>
        </footer>
    )
}

export default Footer