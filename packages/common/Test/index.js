import React from 'react';

import preval from 'preval.macro';

const one = preval`module.exports = 1 + 2 - 1 - 1`;

// import { Trans } from '@lingui/macro';
const Trans = ({ children }) => <div>{children}</div>;

export default function Test() {
  return (
    <div>
      <Trans>This is from the common package</Trans>
    </div>
  );
}
