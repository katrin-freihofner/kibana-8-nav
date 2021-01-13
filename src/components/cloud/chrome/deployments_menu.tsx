import React, { Fragment, useState } from 'react';
import { find } from 'lodash';

import {
  EuiPopover,
  EuiButton,
  EuiSelectable,
  EuiPopoverTitle,
  EuiPopoverFooter,
  htmlIdGenerator,
  EuiBadge,
} from '@elastic/eui';
import theme from '@elastic/eui/dist/eui_theme_light.json';

import { deployments } from './data/deployments';
import { EuiSelectableOptionsProps } from '../../../eui_types_shim';
import { Link, navigate } from 'gatsby';

export type CloudDeploymentsProps = {
  title: string;
  active?: boolean;
  disabled?: boolean;
};

type Props = {
  inDeployment?: boolean;
};

export const CloudDeploymentMenu: React.FunctionComponent<Props> = ({
  inDeployment = false,
  ...props
}) => {
  if (!inDeployment) {
    return (
      <EuiBadge color={theme.euiColorDarkestShade} {...props}>
        Acme Inc.
      </EuiBadge>
    );
  }

  const [options, setOptions] = useState(deployments);
  const [selectedDeployment, setSelectedDeployment] = useState(
    find(deployments, { checked: 'on' })
  );
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const onMenuButtonClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  const onDeploymentSelect = (options: EuiSelectableOptionsProps) => {
    setOptions(options);
    setMenuIsOpen(false);
    setSelectedDeployment(find(options, { checked: 'on' }));
    navigate('home');
  };

  const createMenuId = htmlIdGenerator('CloudDeploymentMenu');
  const menuId = createMenuId();

  const button = (
    <EuiBadge
      color={theme.euiColorDarkestShade}
      iconType="arrowDown"
      iconSide="right"
      onClick={onMenuButtonClick}
      onClickAriaLabel="Deployment details"
      aria-controls={menuId}
      aria-expanded={menuIsOpen}
      aria-haspopup="true"
      {...props}>
      {selectedDeployment?.label}
    </EuiBadge>
  );

  return (
    <EuiPopover
      id={menuId}
      button={button}
      isOpen={menuIsOpen}
      closePopover={closeMenu}
      ownFocus
      anchorPosition="downLeft"
      panelPaddingSize="none">
      <EuiSelectable
        options={options}
        onChange={onDeploymentSelect}
        singleSelection="always"
        style={{ width: 220 }}>
        {(list) => (
          <Fragment>
            <EuiPopoverTitle paddingSize="s">
              <Link to="cloud">Acme Inc.</Link>
            </EuiPopoverTitle>
            {list}
            <EuiPopoverFooter paddingSize="s">
              <EuiButton
                size="s"
                onClick={() => navigate('cloud/deployment')}
                fullWidth
                isDisabled={selectedDeployment?.label !== 'Squirrel'}>
                Manage deployment
              </EuiButton>
            </EuiPopoverFooter>
          </Fragment>
        )}
      </EuiSelectable>
    </EuiPopover>
  );
};
