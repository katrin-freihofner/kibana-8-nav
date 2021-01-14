import React from 'react';

import { EuiHeaderLogo, EuiHeader } from '@elastic/eui';

import { ConsoleHelpMenu } from './help_menu';
import { navigate } from 'gatsby';
import { KibanaChromeSearch } from '../../kibana/chrome/search';
import {
  ConsoleDeploymentMenu,
  ConsoleDeploymentMenuProps,
} from './deployments_menu';
import { ConsoleUpdates } from './updates';
import { ConsoleUserMenu } from './user_menu';
import { CloudUser } from '../../cloud/_data';

export type ConsoleHeaderProps = ConsoleDeploymentMenuProps;

export const ConsoleHeader: React.FunctionComponent<ConsoleHeaderProps> = ({
  companyName,
  inDeployment,
}) => {
  function renderLogo() {
    return (
      <EuiHeaderLogo
        iconType="logoElastic"
        onClick={() => navigate('cloud')}
        aria-label="Go to Elastic console home"
        title="Go to Elastic console home">
        Elastic
      </EuiHeaderLogo>
    );
  }

  return (
    <EuiHeader
      position="fixed"
      theme="dark"
      sections={[
        {
          items: [
            renderLogo(),
            <ConsoleDeploymentMenu
              companyName={companyName}
              inDeployment={inDeployment}
            />,
          ],
          borders: 'none',
        },
        {
          items: [<KibanaChromeSearch />],
          borders: 'none',
        },
        {
          items: [
            <ConsoleHelpMenu />,
            <ConsoleUpdates />,
            <ConsoleUserMenu {...CloudUser} />,
          ],
          borders: 'none',
        },
      ]}
    />
  );
};