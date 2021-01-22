import React, { ReactNode } from 'react';

import { EuiBreadcrumb, EuiHeader } from '@elastic/eui';

import { KibanaHeaderSpacesMenu } from './spaces_menu';

import { KibanaNav } from './nav';
import { ConsoleHeader } from '../../console/header/header';
import { EuiSticky } from '../../eui';

export type KibanaHeaderProps = {
  breadcrumbs?: EuiBreadcrumb[];
  headerLinks?: ReactNode;
};

export const KibanaHeader: React.FunctionComponent<KibanaHeaderProps> = ({
  breadcrumbs,
  headerLinks = <></>,
}) => {
  return (
    <EuiSticky zIndex={1000} id="kbnHeader">
      <ConsoleHeader inDeployment />
      <EuiHeader
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
    </EuiSticky>
  );
};
