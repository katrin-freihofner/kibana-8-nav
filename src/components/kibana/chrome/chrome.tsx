import React, { ReactNode } from 'react';

import { EuiBreadcrumb, EuiHeader } from '@elastic/eui';

import { KibanaHeaderSpacesMenu } from './header';

import { KibanaNav } from './nav';
import { ConsoleHeader } from '../../console/header/chrome';

export type KibanaChromeProps = {
  breadcrumbs?: EuiBreadcrumb[];
  headerLinks?: ReactNode;
};

export const KibanaChrome: React.FunctionComponent<KibanaChromeProps> = ({
  breadcrumbs,
  headerLinks = <></>,
}) => {
  return (
    <div className="kbnHeader">
      <ConsoleHeader inDeployment />
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
