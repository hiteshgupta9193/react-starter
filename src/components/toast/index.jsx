import React from 'react';
import cx from 'classnames';
import './styles.scss';

const TOAST_TYPES = {
  ERROR: 'error',
  SUCCESS: 'success'
};

const Toast = props => {
  const { children, type } = props;
  return (
    <div
      className={cx('toast-container', {
        error: type === TOAST_TYPES.ERROR,
        success: type === TOAST_TYPES.SUCCESS
      })}
    >
      {children}
    </div>
  );
};

export default Toast;
