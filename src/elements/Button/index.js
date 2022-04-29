import React from 'react';

import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

export default function Button(props) {
  const className = [props.className];
  if (props.hasShadow) className.push('btn-shadow');
  if (props.isRounded) className.push('btn-rounded');

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a
          href={props.href}
          className={className.join(' ')}
          style={props.style}
          target={props.target === '_blank' ? '_blank' : undefined}
          rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(' ')}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }
  return (
    <button
      className={className.join(' ')}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: propTypes.oneOf(['button', 'Link']),
  onClick: propTypes.func,
  className: propTypes.string,
  hasShadow: propTypes.bool,
  isRounded: propTypes.bool,
};
