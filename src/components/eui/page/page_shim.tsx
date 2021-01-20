import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import {
  EuiPage as EuiPageOld,
  EuiPageProps as EuiPagePropsOld,
} from '@elastic/eui';

export type EuiPageProps = EuiPagePropsOld & {
  /**
   * Adds `flex-grow: 1` to the whole page for stretching to fit vertically
   */
  grow?: boolean;
};

export const EuiPage: FunctionComponent<EuiPageProps> = ({
  className,
  children,
  grow = false,
  ...rest
}) => {
  const classes = classNames(
    {
      'euiPage--grow': grow,
    },
    className
  );

  return (
    <EuiPageOld className={classes} {...rest}>
      {children}
    </EuiPageOld>
  );
};
