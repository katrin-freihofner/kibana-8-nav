import React, { FunctionComponent } from 'react';
import { EuiBreadcrumb } from '@elastic/eui';
import { CloudPage, CloudPageProps } from '../page/page';
import { CloudDeploymentsNav } from './nav';
import { navigate } from 'gatsby';

export type DeploymentsPageProps = CloudPageProps & {
  sideNavItem?: string;
  showSingleDeployment?: boolean;
};

export const DeploymentsPage: FunctionComponent<DeploymentsPageProps> = ({
  breadcrumbs,
  sideNavItem,
  showSingleDeployment,
  children,
  ...rest
}) => {
  const baseBreadcrumb: EuiBreadcrumb[] = [
    {
      text: 'Overview',
      onClick: breadcrumbs?.length ? () => navigate('cloud') : undefined,
    },
  ];

  let theBreadcrumbs = baseBreadcrumb;
  if (breadcrumbs?.length) {
    theBreadcrumbs = baseBreadcrumb.concat(breadcrumbs);
  }

  return (
    <CloudPage
      breadcrumbs={theBreadcrumbs}
      solutionNav={
        <CloudDeploymentsNav
          showSingleDeployment={showSingleDeployment}
          currentItem={sideNavItem}
        />
      }
      {...rest}>
      {children}
    </CloudPage>
  );
};
