import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ primary, backgroundColor, size, label, buttonLabel, ...props }) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <>
            <button type='button' className={['btn signup-btn signin-btn storybook-button text-white', `storybook-button--${size}`, mode].join(' ')} style={backgroundColor && { backgroundColor }}
                {...props}>{buttonLabel}
            </button>
        </>
    );
};

Button.propTypes = {
    primary: PropTypes.bool,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
};