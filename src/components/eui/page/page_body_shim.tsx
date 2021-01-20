import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import {
  EuiPageBody as EuiPageBodyOld,
  EuiPageBodyProps as EuiPageBodyPropsOld,
} from '@elastic/eui';

export type EuiPageBodyProps = EuiPageBodyPropsOld & {
  /**
   * Adds a panel-like wrapper to the page body
   */
  panelled?: boolean;
};

export const EuiPageBody: FunctionComponent<EuiPageBodyProps> = ({
  className,
  children,
  panelled = false,
  ...rest
}) => {
  const classes = classNames(
    {
      'euiPageBody--panelled': panelled,
    },
    className
  );

  return (
    <EuiPageBodyOld className={classes} {...rest}>
      {children}
    </EuiPageBodyOld>
  );
};
