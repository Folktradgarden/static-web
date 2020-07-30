import React from 'react'

interface FTLogoProps {
    width?: string
    height?: string
}

const FTLogo: React.FC<FTLogoProps> = ({width, height}) => {
    return(
        <svg
          width={width ? width: "auto"} height={height ? height: "auto"}
          viewBox="0 0 511.99483 375.38331">
        </svg>
    )
}

export default FTLogo