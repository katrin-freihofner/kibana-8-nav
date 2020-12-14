import React from 'react';

import { EuiCollapsibleNavGroup, EuiButton } from '@elastic/eui';
import { navigate } from 'gatsby';

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
      <EuiButton
        onClick={() => navigate('cloud/deployment')}
        color="ghost"
        fullWidth>
        Manage deployment
      </EuiButton>
    </div>
  </EuiCollapsibleNavGroup>
);
