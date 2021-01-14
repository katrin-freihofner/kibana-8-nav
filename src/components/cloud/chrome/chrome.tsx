import React from 'react';

import {
  EuiBreadcrumb,
  EuiBadge,
  EuiHeader,
  EuiHeaderLogo,
} from '@elastic/eui';

import { CloudNav } from './nav';
import { ConsoleHeader } from '../../console/header/chrome';
import { navigate } from 'gatsby';

export type CloudChromeProps = {
  breadcrumbs?: EuiBreadcrumb[];
};

export const CloudChrome: React.FunctionComponent<CloudChromeProps> = ({
  breadcrumbs,
}) => {
  const CloudLogo = (
    <EuiHeaderLogo
      iconType="logoCloud"
      onClick={() => navigate('cloud')}
      aria-label="Go to Elastic cloud home"
      title="Go to Elastic cloud home"
    />
  );

  return (
    <div className="cloudHeader">
      <ConsoleHeader />
      <EuiHeader
        position="fixed"
        sections={[
          {
            items: [
              <CloudNav
                currentRoute={
                  breadcrumbs ? String(breadcrumbs[0].text) : 'Cloud'
                }
              />,
              CloudLogo,
            ],
            borders: 'none',
            breadcrumbs,
          },
          {
            borders: 'none',
            items: [<EuiBadge>Version 8.0</EuiBadge>],
          },
        ]}
      />
    </div>
  );
};
