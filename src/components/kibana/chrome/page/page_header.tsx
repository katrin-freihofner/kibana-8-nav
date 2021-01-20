import React, { FunctionComponent, ReactNode } from 'react';
import classNames from 'classnames';

import { EuiButton, EuiButtonProps } from '@elastic/eui';
import {
  EuiPageHeaderProps,
  EuiPageHeader,
} from '../../../eui/page/page_header_shim';

import { EuiSuperDatePicker } from '../../../eui/super_date_picker';

export type KibanaPageHeaderProps = EuiPageHeaderProps & {
  time?: boolean;
  actionButtons?: ReactNode[];
};

export const KibanaPageHeaderPrimaryAddButton: FunctionComponent<EuiButtonProps> = ({
  ...buttonProps
}) => <EuiButton iconType="plusInCircleFilled" {...buttonProps} fill />;

export const KibanaPageHeader: FunctionComponent<KibanaPageHeaderProps> = ({
  className,
  rightSideContent,
  time,
  actionButtons,
  ...rest
}) => {
  const classes = classNames('kbnPageHeader', className);

  let extraSettings: Partial<EuiPageHeaderProps> = {};

  if (!rightSideContent && time) {
    rightSideContent = [<EuiSuperDatePicker />];
    extraSettings = {
      responsiveOrder: 'rightFirst',
      rightSideResponsive: true,
    };
  } else if (!rightSideContent && actionButtons) {
    rightSideContent = actionButtons;
  }

  return (
    <EuiPageHeader
      {...rest}
      rightSideContent={rightSideContent}
      {...extraSettings}
      className={classes}
    />
  );
};
