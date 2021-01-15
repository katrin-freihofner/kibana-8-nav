import React from 'react';

import {
  EuiHeaderLogo,
  EuiBreadcrumb,
  EuiBadge,
  EuiHeader,
  EuiHeaderLink,
  EuiHeaderLinks,
} from '@elastic/eui';

import { DocsNav } from './nav';
import { navigate } from 'gatsby';
import { KibanaChromeSearch } from '../../kibana/chrome/search';
import { ConsoleUserMenu } from '../../console/header/user_menu';
import { CloudUser } from '../../cloud/_data';
import { EuiSticky } from '../../eui';

export type DocsHeaderProps = {
  breadcrumbs?: EuiBreadcrumb[];
};

export const DocsHeader: React.FunctionComponent<DocsHeaderProps> = ({
  breadcrumbs,
}) => {
  function renderLogo() {
    return (
      <EuiHeaderLogo
        iconType="logoElastic"
        onClick={() => navigate('documentation')}
        aria-label="Goes to home">
        Elastic
      </EuiHeaderLogo>
    );
  }

  return (
    <EuiSticky id="docsHeader">
      <EuiHeader
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
            items: [<KibanaChromeSearch />],
            borders: 'none',
          },
          {
            items: [<ConsoleUserMenu {...CloudUser} />],
            borders: 'none',
          },
        ]}
      />
      <EuiHeader
        sections={[
          {
            items: [
              <DocsNav
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
    </EuiSticky>
  );
};
