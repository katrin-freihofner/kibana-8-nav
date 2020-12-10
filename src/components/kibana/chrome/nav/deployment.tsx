import React from 'react';

import {
  EuiCollapsibleNavGroup,
  EuiListGroupProps,
  EuiListGroup,
  EuiButton,
  EuiSpacer,
} from '@elastic/eui';
import { navigateTo } from 'gatsby';

const deploymentsList: EuiListGroupProps['listItems'] = [
  {
    label: 'combining-binaries',
    iconType: 'logoAzureMono',
    size: 's',
  },
  {
    label: 'stack-monitoring',
    iconType: 'logoAWSMono',
    size: 's',
  },
];

export const KibanaNavDeployment = () => (
  <EuiCollapsibleNavGroup
    title={
      <span>
        <small style={{ fontWeight: 'normal' }}>Deployment</small> <br />
        <strong>Squirrel</strong>
      </span>
    }
    iconType="logoGCPMono"
    iconSize="xl"
    isCollapsible={true}
    initialIsOpen={false}
    background="dark">
    <div role="group" className="kibanaNavDeployment__content">
      {/* <EuiListGroup listItems={deploymentsList} flush />
      <EuiSpacer size="s" /> */}
      <EuiButton onClick={() => navigateTo('cloud')} color="ghost" fullWidth>
        Manage deployments
      </EuiButton>
    </div>
  </EuiCollapsibleNavGroup>
);
