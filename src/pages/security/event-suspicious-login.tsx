import React from 'react';

import {
  EuiBreadcrumb,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiStat,
  EuiPageContent,
} from '@elastic/eui';

import { KibanaPageHeader } from '../../components/kibana/chrome/page/page_header';
import { KibanaGlobals } from '../../components/kibana/chrome/globals';
import { SecurityPage } from '../../components/kibana/security/page';

// @ts-ignore
import tracesImg from '../../images/Traces - Explorer.png';
import { EuiPageContentBody } from '../../components/eui/page/page_body_content_shim';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Hosts',
    href: '#',
  },
  {
    text: 'Events',
  },
];

export default () => (
  <SecurityPage
    panelled={false}
    pageTitle="Suspicious login"
    navItem="Events"
    breadcrumbs={breadcrumbs}
    restrictWidth={false}
    pageContentProps={{ paddingSize: 'none' }}>
    <KibanaGlobals />
    <KibanaPageHeader
      pageTitle="Suspcious login"
      description="This timeline is to investigate a suspicious login."
      actionButtons={[
        <EuiButton fill iconType="arrowDown" iconSide="right">
          Add to case
        </EuiButton>,
        <EuiButton iconType="starEmpty">Add to favorites</EuiButton>,
      ]}
    />

    <EuiPageContent paddingSize="l" borderRadius="none" hasShadow={false}>
      <EuiPageContentBody>
        <EuiFlexGroup responsive={false} wrap>
          <EuiFlexItem>
            <EuiStat title="1" description="Default color" />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiStat
              title="10"
              description="Subdued color"
              titleColor="subdued"
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiStat
              title="100"
              description="Primary color"
              titleColor="primary"
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiStat
              title="1,000"
              description="Secondary color"
              titleColor="secondary"
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiStat
              title="10,000"
              description="Danger color"
              titleColor="danger"
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiStat
              title="100,000"
              description="Accent color"
              titleColor="accent"
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPageContentBody>
    </EuiPageContent>
    <EuiPageContent paddingSize="l" borderRadius="none" hasShadow={false}>
      <EuiPageContentBody>
        <div className="pageScreenshot__TBD">
          <img
            className="pageScreenshot pageScreenshot--fullWidth"
            alt="Traces explorer"
            width={1275}
            src={tracesImg}
          />
        </div>
      </EuiPageContentBody>
    </EuiPageContent>
  </SecurityPage>
);
