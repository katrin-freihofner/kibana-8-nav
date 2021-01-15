import React, { ReactNode } from 'react';

import {
  EuiFlexGroup,
  EuiFieldSearch,
  EuiFlexItem,
  EuiSpacer,
  EuiSelect,
  EuiTab,
  EuiTabs,
  EuiFacetButton,
  EuiFacetGroup,
  EuiFlexGrid,
  EuiPanel,
  EuiHeaderLink,
  EuiBreadcrumb,
} from '@elastic/eui';
import { ObservabilityPage } from '../../components/kibana/observability/page';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'APM',
    href: '#',
  },
  {
    text: 'Traces',
    href: '#',
  },
  {
    text: 'Finch',
  },
];

const headerLinks: ReactNode = <EuiHeaderLink>Alerts</EuiHeaderLink>;

export default () => (
  <ObservabilityPage
    pageTitle="Finch Trace"
    navItem="Traces"
    headerLinks={headerLinks}
    breadcrumbs={breadcrumbs}
    pageHeader={{
      pageTitle: 'Finch',
      time: true,
    }}>
    <EuiFlexGroup>
      <EuiFlexItem grow={3}>
        <EuiFieldSearch fullWidth placeholder="Search transactions..." />
      </EuiFlexItem>
      <EuiFlexItem grow={1}>
        <EuiSelect prepend="Environment" />
      </EuiFlexItem>
    </EuiFlexGroup>
    <EuiSpacer />
    <EuiTabs>
      <EuiTab isSelected>Transactions</EuiTab>
      <EuiTab>Errors</EuiTab>
      <EuiTab>JVMs</EuiTab>
      <EuiTab>Service Map</EuiTab>
    </EuiTabs>
    <EuiSpacer />
    <EuiFlexGroup>
      <EuiFlexItem grow={false}>
        <EuiFacetGroup>
          <EuiFacetButton>Transaction type</EuiFacetButton>
          <EuiFacetButton>Hose</EuiFacetButton>
          <EuiFacetButton>Container ID</EuiFacetButton>
        </EuiFacetGroup>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiFlexGrid columns={2}>
          <EuiFlexItem>
            <EuiPanel style={{ minHeight: 200 }} />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiPanel style={{ minHeight: 200 }} />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiPanel style={{ minHeight: 200 }} />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiPanel style={{ minHeight: 200 }} />
          </EuiFlexItem>
        </EuiFlexGrid>
      </EuiFlexItem>
    </EuiFlexGroup>
  </ObservabilityPage>
);
