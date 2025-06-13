import React from 'react';
import styles from './Asterisk.module.css';

export interface AsteriskProps {
  className?: string;
  disabled?: boolean;
}

export const Asterisk = React.forwardRef<HTMLSpanElement, AsteriskProps>(
  ({ className, disabled = false, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={[
          styles.asterisk,
          disabled ? styles.disabled : '',
          className,
        ].join(' ')}
        {...props}
      >
        *
      </span>
    );
  }
);

Asterisk.displayName = 'Asterisk'; 