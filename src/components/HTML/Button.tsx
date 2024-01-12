import React, {ButtonHTMLAttributes} from 'react'

type ButtonProp = {
    children:React.ReactNode;
}

type ButtonAtrrs = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({children, ...restProps}:ButtonProp & ButtonAtrrs) => {
  return (
    <button type='button' {...restProps}>
        {children}
    </button>
  )
}

export default Button
