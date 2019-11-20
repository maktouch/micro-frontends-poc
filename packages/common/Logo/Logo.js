import React from 'react';
import cx from 'classnames';

import styles from './Logo.module.scss';

export default function Logo(props) {
  return (
    <a
      href="/"
      title="XSplit"
      className={cx(styles.logo, {
        [styles[`logo--${props.color}`]]: props.color,
      })}
    />
  );
}
