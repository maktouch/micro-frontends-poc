import React from 'react';

import { I18nProvider } from '@lingui/react';

import { Trans } from '@lingui/macro';

import Logo from '@poc/common/Logo';
import LocaleSwitcher from '@poc/common/LocaleSwitcher';
import Test from '@poc/common/Test';

function App() {
  return (
    <I18nProvider>
      <div className="App">
        <div>
          <Logo />
          <LocaleSwitcher />
          <Trans>This is only in CRA</Trans>
          <Test />
        </div>
      </div>
    </I18nProvider>
  );
}

export default App;
