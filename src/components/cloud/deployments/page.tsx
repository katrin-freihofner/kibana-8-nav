import React, { FunctionComponent } from 'react';
import { EuiBreadcrumb } from '@elastic/eui';
import { CloudPage, CloudPageProps } from '../page/page';
import { CloudDeploymentsNav } from './nav';

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
      text: 'Cloud',
      href: breadcrumbs?.length ? '/cloud' : undefined,
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
