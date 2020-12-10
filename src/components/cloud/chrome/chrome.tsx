import React from 'react';

import {
  EuiHeaderLogo,
  EuiBreadcrumb,
  EuiBadge,
  EuiHeader,
  EuiHeaderLink,
  EuiHeaderLinks,
} from '@elastic/eui';

import { user } from '../../kibana/chrome/data';

import { KibanaHeaderUserMenu } from '../../kibana/chrome/header';

import { CloudNav } from './nav';

export type CloudChromeProps = {
  breadcrumbs?: EuiBreadcrumb[];
};

export const CloudChrome: React.FunctionComponent<CloudChromeProps> = ({
  breadcrumbs,
}) => {
  function renderLogo() {
    return (
      <EuiHeaderLogo iconType="logoElastic" href="/" aria-label="Goes to home">
        Elastic
      </EuiHeaderLogo>
    );
  }

  return (
    <div className="docsHeader">
      <EuiHeader
        position="fixed"
        theme="dark"
        sections={[
          {
            items: [
              renderLogo(),
              <EuiHeaderLinks aria-label="App navigation dark theme example">
                <EuiHeaderLink>Products</EuiHeaderLink>
                <EuiHeaderLink isActive>Learn</EuiHeaderLink>
                <EuiHeaderLink>Company</EuiHeaderLink>
              </EuiHeaderLinks>,
            ],
            borders: 'none',
          },
          {
            items: [<KibanaHeaderUserMenu {...user} />],
            borders: 'none',
          },
        ]}
      />
      <EuiHeader
        position="fixed"
        sections={[
          {
            items: [
              <CloudNav
                currentRoute={
                  breadcrumbs ? String(breadcrumbs[0].text) : 'Documentation'
                }
              />,
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
