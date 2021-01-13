import React, { useState } from 'react';
import theme from '@elastic/eui/dist/eui_theme_light.json';

import { EuiButton, EuiPopover, EuiPopoverTitle, EuiBadge } from '@elastic/eui';

export const CompanyBadge = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <EuiPopover
      isOpen={isPopoverOpen}
      closePopover={() => setIsPopoverOpen(false)}
      button={
        <EuiBadge
          color={theme.euiColorDarkestShade}
          iconType="arrowDown"
          iconSide="right"
          onClick={() => setIsPopoverOpen((isOpen) => !isOpen)}
          onClickAriaLabel="Company details">
          Company Name
        </EuiBadge>
      }>
      <EuiPopoverTitle>Contents TBD</EuiPopoverTitle>
      <EuiButton isDisabled fullWidth>
        Manage Company
      </EuiButton>
    </EuiPopover>
  );
};
