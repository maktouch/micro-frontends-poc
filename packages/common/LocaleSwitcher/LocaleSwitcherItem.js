import React from "react";
import cx from "classnames";

import styles from "./LocaleSwitcherItem.module.scss";

function Container(props) {
  if (props.href) {
    return <a {...props} />;
  }

  return <div {...props} />;
}

export function LocaleSwitcherItem(props) {
  const { locale } = props;

  return (
    <Container
      {...props}
      className={cx(styles["locale-switcher-item"], props.className)}
    >
      <div
        className={cx(
          styles["locale-switcher-item__flag"],
          styles[`locale-switcher-item__flag--${locale}`]
        )}
      />
      <div className={styles["locale-switcher-item__text"]}>{locale}</div>
    </Container>
  );
}
