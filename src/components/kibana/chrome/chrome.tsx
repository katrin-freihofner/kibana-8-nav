import React, { ReactNode } from 'react';

import { EuiHeaderLogo, EuiBreadcrumb, EuiHeader } from '@elastic/eui';

import { user } from './data';

import {
  KibanaHeaderUpdates,
  KibanaHeaderUserMenu,
  KibanaHeaderSpacesMenu,
} from './header';

import { KibanaNav } from './nav';
import { KibanaChromeSearch } from './search';
import { KibanaHeaderHelpMenu } from './header/header_help_menu';
import { navigate } from 'gatsby';
import { KibanaNavDeployment } from './nav/deployment';

export type KibanaChromeProps = {
  breadcrumbs?: EuiBreadcrumb[];
  headerLinks?: ReactNode;
};

export const KibanaChrome: React.FunctionComponent<KibanaChromeProps> = ({
  breadcrumbs,
  headerLinks = <></>,
}) => {
  function renderLogo() {
    return (
      <EuiHeaderLogo
        iconType="logoElastic"
        onClick={() => navigate('/')}
        aria-label="Goes to home">
        Elastic
      </EuiHeaderLogo>
    );
  }

  return (
    <div className="kbnHeader">
      <EuiHeader
        position="fixed"
        theme="dark"
        sections={[
          {
            items: [renderLogo(), <KibanaNavDeployment />],
            borders: 'none',
          },
          {
            items: [<KibanaChromeSearch />],
            borders: 'none',
          },
          {
            items: [
              <KibanaHeaderHelpMenu />,
              <KibanaHeaderUpdates />,
              <KibanaHeaderUserMenu {...user} />,
            ],
            borders: 'none',
          },
        ]}
      />
      <EuiHeader
        position="fixed"
        sections={[
          {
            items: [
              <KibanaNav
                currentRoute={
                  breadcrumbs ? String(breadcrumbs[0].text) : 'Home'
                }
              />,
              <KibanaHeaderSpacesMenu />,
            ],
            borders: 'none',
            breadcrumbs,
          },
          {
            borders: 'none',
            items: [headerLinks],
          },
        ]}
      />
    </div>
  );
};
