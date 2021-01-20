import React from 'react';

import {
  EuiBreadcrumb,
  EuiPageContent,
  EuiPageContentBody,
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSelect,
  EuiSpacer,
} from '@elastic/eui';

import { DeploymentsPage } from '../../components/cloud/deployments/page';
// @ts-ignore
import listImg from '../../images/Cloud - Deployments List.png';
import { KibanaPageHeaderPrimaryAddButton } from '../../components/kibana/chrome/page/page_header';
import { Link } from 'gatsby';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Deployments',
  },
];

export default () => (
  <DeploymentsPage
    pageTitle="Deployments"
    pageHeader={{
      pageTitle: 'All deployments',
      rightSideContent: [
        <KibanaPageHeaderPrimaryAddButton>
          Create deployment
        </KibanaPageHeaderPrimaryAddButton>,
      ],
      restrictWidth: true,
    }}
    sideNavItem="Overview"
    breadcrumbs={breadcrumbs}>
    <EuiPageContent className="euiPageContent--restrictWidth">
      <EuiPageContentBody>
        <EuiFlexGroup>
          <EuiFlexItem grow={3}>
            <EuiFieldSearch fullWidth placeholder="Search transactions..." />
          </EuiFlexItem>
          <EuiFlexItem grow={1}>
            <EuiSelect prepend="Environment" />
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer />
        <Link className="pageScreenshot__TBD" to="cloud/deployment">
          <img
            className="pageScreenshot"
            alt="Deployments list"
            width={678}
            src={listImg}
          />
        </Link>
      </EuiPageContentBody>
    </EuiPageContent>
  </DeploymentsPage>
);
