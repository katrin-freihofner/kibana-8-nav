import React from 'react';

import {
  EuiHeaderLogo,
  EuiBreadcrumb,
  EuiBadge,
  EuiHeader,
  EuiButton,
} from '@elastic/eui';

import { user } from '../../kibana/chrome/data';

import {
  KibanaHeaderUpdates,
  KibanaHeaderUserMenu,
} from '../../kibana/chrome/header';

import { CloudNav } from './nav';
import { KibanaHeaderHelpMenu } from '../../kibana/chrome/header/header_help_menu';

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
            items: [renderLogo()],
            borders: 'none',
          },
          {
            items: [
              <EuiButton
                color="ghost"
                size="s"
                iconType="arrowDown"
                iconSide="right">
                Org name
              </EuiButton>,
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
