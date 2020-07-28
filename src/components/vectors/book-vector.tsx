import React from 'react'

const BookVector = ({ className, height, width }) => {
    return (
        <svg
            className={className ? className : null}
            width={width ? width : "auto"}
            height={height ? height : "auto"}
            viewBox="0 0 374.50308 249.14734">
            <defs>
                <linearGradient
                    id="linearGradient1120"
                    x1="145.73888"
                    y1="245.13541"
                    x2="263.51871"
                    y2="245.65477"
                    gradientUnits="userSpaceOnUse"
                    spreadMethod="pad"
                    gradientTransform="matrix(2.648066,0,0,2.648066,-355.99432,-530.35432)">
                    <stop
                        stopColor='#f9f7f1'
                        stopOpacity='1'
                        offset="0"
                        id="stop1114"/>
                    <stop
                        id="stop1136"
                        offset="0.43614829"
                        stopColor='#eee8d6'
                        stopOpacity='1'/>
                    <stop
                        id="stop1122"
                        offset="0.50501925"
                        stopColor='#cfbf8c'
                        stopOpacity='1'/>
                    <stop
                        stopColor='#eee8d6'
                        stopOpacity='0.99607843'
                        offset="0.57652426"
                        id="stop1134"/>
                    <stop
                        stopColor='#f9f7f1'
                        stopOpacity='0.99512196'
                        offset="1"
                        id="stop1116"/>
                </linearGradient>
                <linearGradient
                    id="linearGradient1164"
                    x1="135.78271"
                    y1="249.53708"
                    x2="274.6051"
                    y2="249.54463"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(2.648066,0,0,2.648066,-355.99432,-530.35432)">
                    <stop
                        stopColor='#5f321c'
                        stopOpacity='1'
                        offset="0"
                        id="stop1190"/>
                    <stop
                        stopColor='#3f2113'
                        stopOpacity='1'
                        offset="0.49872628"
                        id="stop1192"/>
                    <stop
                        id="stop1194"
                        offset="1"
                        stopColor='#5f321c'
                        stopOpacity='1'/>
                </linearGradient>
            </defs>
            <path
                fill='url(#linearGradient1164)'
                fillOpacity='1'
                stroke='#5f321c'
                strokeWidth='5.00421953'
                strokeLinecap='butt'
                strokeLinejoin='round'
                strokeMiterlimit='4'
                strokeDasharray='none'
                strokeOpacity='1'
                d="M 2.5021098,17.934321 V 246.64533 c 0,0 97.9770602,-33.84284 184.7494202,-10.59227 89.52553,-23.9883 184.74945,10.59227 184.74945,10.59227 V 17.934321 c 0,0 -120.86941,-15.6966295 -184.74945,21.184525 C 122.04132,1.4697015 2.5021098,17.934321 2.5021098,17.934321 Z"
            />
            <path
                fill='url(#linearGradient1120)'
                fillOpacity='1'
                stroke='#5f321c'
                strokeWidth='2.39201689'
                strokeLinecap='butt'
                strokeLinejoin='miter'
                strokeMiterlimit='4'
                strokeDasharray='none'
                strokeOpacity='1'
                d="M 20.535599,1.9101815 V 230.8963 c 0,0 102.139211,-32 166.715931,5.28339 66.62569,-38.46636 166.71596,-5.28339 166.71596,-5.28339 V 1.9101815 c 0,0 -121.53177,-8.08579 -166.71596,37.0984045 C 141.12646,-7.1164885 20.535599,1.9101815 20.535599,1.9101815 Z"
            />
            <path
                fill='none'
                stroke='#5f321c'
                strokeWidth='2.64806604px'
                strokeLinecap='butt'
                strokeLinejoin='miter'
                strokeOpacity='1'
                d="M 187.25153,39.008586 V 236.05306"
            />
        </svg>
    )
}

export default BookVector