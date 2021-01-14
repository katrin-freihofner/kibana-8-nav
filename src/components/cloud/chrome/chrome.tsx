import React from 'react';

import { EuiBreadcrumb, EuiBadge, EuiHeader } from '@elastic/eui';

import { CloudNav } from './nav';
import { ConsoleHeader } from '../../console/header/chrome';

export type CloudChromeProps = {
  breadcrumbs?: EuiBreadcrumb[];
};

export const CloudChrome: React.FunctionComponent<CloudChromeProps> = ({
  breadcrumbs,
}) => {
  return (
    <div className="cloudHeader">
      <ConsoleHeader companyName="Acme Inc." />
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
