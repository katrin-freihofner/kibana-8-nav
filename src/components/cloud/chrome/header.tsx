import React from 'react';
import { navigate } from 'gatsby';

import {
  EuiBreadcrumb,
  EuiBadge,
  EuiHeader,
  EuiHeaderLogo,
} from '@elastic/eui';

import { EuiSticky } from '../../eui';

import { ConsoleHeader } from '../../console/header/header';
import { CloudNav } from './nav';

export type CloudHeaderProps = {
  breadcrumbs?: EuiBreadcrumb[];
};

export const CloudHeader: React.FunctionComponent<CloudHeaderProps> = ({
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
    <EuiSticky zIndex={1000} id="cloudHeader">
      <ConsoleHeader />
      <EuiHeader
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
    </EuiSticky>
  );
};
