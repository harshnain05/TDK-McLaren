import React from 'react'

const Description = ({ text, customColor, myOpacity }) => {
    return (
        <p className={`text-[22px] max-md:text-sm  ${customColor} ${myOpacity} max-sm:leading-[21px] max-sm:text-base  leading-[29.9px]`}>{text}</p>
    )
}
export default Description