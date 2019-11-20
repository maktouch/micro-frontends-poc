import React from 'react';
import cx from 'classnames';

import styles from './Icon.module.scss';

export default function Icon(props) {
  return <span className={cx(styles['icn'], styles[`icn-${props.type}`], props.className)} />;
}
