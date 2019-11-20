import React, { useState, useRef } from 'react';
import cx from 'classnames';

import styles from './LocaleSwitcher.module.scss';
import Icon from '../Icon';
import { LocaleSwitcherItem } from './LocaleSwitcherItem';
import { useOnClickOutside } from '../hooks/useClickOutside';

export default function LocaleSwitcher(props) {
  const { direction = 'down', currentLocale, locales = ['en', 'ko'] } = props;
  const containerRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const iconDir = (function() {
    if (direction === 'down') {
      return dropdownOpen ? 'up' : 'down';
    }

    return dropdownOpen ? 'down' : 'up';
  })();

  useOnClickOutside(containerRef, e => {
    setDropdownOpen(false);
  });

  return (
    <div
      className={cx(styles['locale-switcher'], styles[`locale-switcher--${direction}`], {
        [styles['locale-switcher--open']]: dropdownOpen,
      })}
      onClick={e => setDropdownOpen(o => !o)}
      ref={containerRef}
    >
      <button className={styles['locale-switcher__toggle']}>
        <LocaleSwitcherItem locale={currentLocale} />
        <Icon className={styles['locale-switcher__icon']} type={`chevron-${iconDir}`} />
      </button>

      <div className={styles['locale-switcher-dropdown']}>
        {locales
          .filter(locale => locale !== currentLocale)
          .map(locale => (
            <LocaleSwitcherItem
              key={locale}
              locale={locale}
              href={locale === 'en' ? '/' : `/${locale}`}
              className={styles['locale-switcher-dropdown__item']}
            />
          ))}
      </div>
    </div>
  );
}
