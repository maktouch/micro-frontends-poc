import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import Logo from '@poc/common/Logo';
import LocaleSwitcher from '@poc/common/LocaleSwitcher';

import { Trans } from '@lingui/macro';

import { I18nProvider } from '@lingui/react';

const Home = () => (
  <I18nProvider language="en">
    <div>
      <Head title="Home" />
      <Logo />
      <LocaleSwitcher currentLocale="en" />
      <div>
        <Trans>This is only in NEXTJS</Trans>
      </div>
    </div>
  </I18nProvider>
);

export default Home;
