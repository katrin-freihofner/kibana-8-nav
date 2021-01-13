import React, { useState } from 'react';
import theme from '@elastic/eui/dist/eui_theme_light.json';

import { EuiButton, EuiPopover, EuiPopoverTitle, EuiBadge } from '@elastic/eui';
import { navigate } from 'gatsby';

export const KibanaNavDeployment = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    // <EuiCollapsibleNavGroup
    //   title={
    //     <span>
    //       <small style={{ fontWeight: 'normal' }}>Deployment</small> <br />
    //       <strong>Squirrel</strong>
    //     </span>
    //   }
    //   iconType="logoGCPMono"
    //   iconSize="xl"
    //   isCollapsible={true}
    //   initialIsOpen={false}
    //   background="dark">
    //   <div role="group" className="kibanaNavDeployment__content">
    //     {/* <EuiListGroup listItems={deploymentsList} flush />
    //     <EuiSpacer size="s" /> */}
    //     <EuiButton
    //   onClick={() => navigate('cloud/deployment')}
    //   color="ghost"
    //   fullWidth>
    //   Manage deployment
    // </EuiButton>
    //   </div>
    // </EuiCollapsibleNavGroup>
    <EuiPopover
      isOpen={isPopoverOpen}
      closePopover={() => setIsPopoverOpen(false)}
      button={
        <EuiBadge
          color={theme.euiColorDarkestShade}
          iconType="arrowDown"
          iconSide="right"
          onClick={() => setIsPopoverOpen((isOpen) => !isOpen)}
          onClickAriaLabel="Deployment details">
          Company Name / Squirrel
        </EuiBadge>
      }>
      <EuiPopoverTitle>Contents TBD</EuiPopoverTitle>
      <EuiButton onClick={() => navigate('cloud/deployment')} fullWidth>
        Manage deployment
      </EuiButton>
    </EuiPopover>
  );
};
