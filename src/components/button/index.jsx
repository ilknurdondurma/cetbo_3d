import classNames from "classnames";
import PropTypes from "prop-types"
import { createElement } from "react";

export default function Button({ variant,size,children,as,className,onClick, ...props }) {
    return createElement(as, {
      ...props,
      className: classNames (
          "inline-flex items-center justify-center rounded border border-black",
           {
              "bg-primary   text-black   shadow-indigo-500/50  hover:bg-secondary/50 " : variant === 'Primary',
              "bg-black  text-white   shadow-indigo-500/50  hover:bg-black/80 " : variant === 'Secondary',
  
              "px-5 font-medium h-12 text-lg": size === 'Normal',
              "px-4 font-medium h-auto text-sm ": size === 'Small',
              [className]: !!className 
          }),
          onClick: () => onClick && onClick(),
    }, 
      <span className='flex items-center'>{children}</span>
    )
  }
  
  Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    variant: PropTypes.oneOf(['Priamry','Secondary']),
    size: PropTypes.oneOf(['Normal', 'Small']),
    as: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    props: PropTypes.object,
    className: PropTypes.string
  }
  
  Button.defaultProps = {
    as: 'button',
    variant: 'Primary',
    size: 'Normal',
  }