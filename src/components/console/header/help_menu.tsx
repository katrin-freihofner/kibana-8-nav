import React, { useState } from 'react';
import { navigate } from 'gatsby';

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiHeaderSectionItemButton,
  EuiPopover,
  htmlIdGenerator,
  EuiIcon,
  EuiPopoverTitle,
  EuiListGroup,
  EuiListGroupItem,
} from '@elastic/eui';

type Props = React.ComponentProps<typeof EuiHeaderSectionItemButton>;

export const ConsoleHelpMenu: React.FunctionComponent<Props> = ({
  ...rest
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const onMenuButtonClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  const createMenuId = htmlIdGenerator('KibanaHelpMenu');
  const menuId = createMenuId();

  const button = (
    <EuiHeaderSectionItemButton
      aria-controls={menuId}
      aria-expanded={menuIsOpen}
      aria-haspopup="true"
      aria-label="Help menu"
      onClick={onMenuButtonClick}
      {...rest}>
      <EuiIcon type="help" />
    </EuiHeaderSectionItemButton>
  );

  return (
    <EuiPopover
      ownFocus
      anchorPosition="downRight"
      panelPaddingSize="none"
      button={button}
      id={menuId}
      isOpen={menuIsOpen}
      closePopover={closeMenu}>
      <EuiPopoverTitle paddingSize="s">
        <EuiFlexGroup>
          <EuiFlexItem>Help</EuiFlexItem>
          <EuiFlexItem grow={false}>v 8.0.0</EuiFlexItem>
        </EuiFlexGroup>
      </EuiPopoverTitle>
      <EuiListGroup gutterSize="none" flush>
        <EuiListGroupItem
          size="s"
          color="primary"
          label="Documentation"
          onClick={() => {
            navigate('documentation');
          }}
        />
        <EuiListGroupItem
          size="s"
          color="primary"
          isDisabled
          label="Ask Elastic"
        />
        <EuiListGroupItem
          size="s"
          color="primary"
          // TODO: Disabled is not changing the color
          isDisabled
          label="Give feedback"
        />
        <EuiListGroupItem
          size="s"
          color="primary"
          isDisabled
          label="Open an issue in Github"
        />
      </EuiListGroup>
    </EuiPopover>
  );
};
