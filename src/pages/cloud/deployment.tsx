import React from 'react';

import {
  EuiBreadcrumb,
  EuiPageContent,
  EuiPageHeaderSection,
  EuiButton,
  EuiPageContentBody,
  EuiTitle,
  EuiLink,
} from '@elastic/eui';

import { DeploymentsPage } from '../../components/cloud/deployments/page';
// @ts-ignore
import squirrelImg from '../../images/Cloud Deployment - Squirrel.png';
import { navigate } from 'gatsby';
import { EuiPageHeader } from '../../components/eui/page/page_header_shim';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Deployments',
    onClick: () => {
      navigate('cloud/deployments');
    },
  },
  {
    text: 'Squirrel',
  },
];

export default () => (
  <DeploymentsPage
    pageTitle="Squirrel - Deployment overview"
    showSingleDeployment={true}
    sideNavItem="Overview"
    breadcrumbs={breadcrumbs}>
    <EuiPageHeader>
      <EuiPageHeaderSection>
        <EuiTitle size="xxs">
          <h1>
            <EuiLink>
              <strong>Squirrel</strong>
            </EuiLink>
          </h1>
        </EuiTitle>
        {/* @ts-ignore NEED TO ALLOW THIS IN EUI */}
        <EuiTitle size="l" style={{ marginTop: 0 }}>
          <h2>Deployment overview</h2>
        </EuiTitle>
      </EuiPageHeaderSection>
      <EuiPageHeaderSection>
        <EuiButton
          iconType="popout"
          iconSide="right"
          onClick={() => navigate('/')}>
          Open deployment
        </EuiButton>
      </EuiPageHeaderSection>
    </EuiPageHeader>
    {/* <EuiPageContent
      className="euiPageContent--restrictWidth"
      style={{ flexGrow: 0 }}>
      <EuiPageContentBody>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiStat title="0" description="Agents" titleColor="subdued" />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiStat title="0" description="Online" titleColor="subdued" />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiStat title="0" description="Offline" titleColor="subdued" />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiStat title="0" description="Error" titleColor="subdued" />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPageContentBody>
    </EuiPageContent>*/}
    <EuiPageContent
      className="euiPageContent--restrictWidth"
      style={{ paddingTop: 0 }}>
      <EuiPageContentBody className="pageScreenshot__TBD">
        <img
          className="pageScreenshot pageScreenshot--responsive"
          alt="Blank table"
          width={1168}
          src={squirrelImg}
        />
      </EuiPageContentBody>
    </EuiPageContent>
  </DeploymentsPage>
);
