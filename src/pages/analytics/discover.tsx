import React, { ReactNode } from 'react';

import {
  EuiBreadcrumb,
  EuiPageHeader,
  EuiButton,
  EuiHeaderLink,
  EuiHeaderLinks,
  EuiPageSideBar,
  EuiPageContent,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButtonIcon,
  EuiFieldSearch,
  EuiFilterButton,
  EuiFilterGroup,
} from '@elastic/eui';
// @ts-ignore
import sidebarImg from '../../images/Discover - sidebar.svg';
// @ts-ignore
import chartImg from '../../images/Discover - chart.svg';
// @ts-ignore
import tableImg from '../../images/Discover - table.svg';

import { KibanaGlobals } from '../../components/kibana/chrome/globals';
import { KibanaPage } from '../../components/kibana/page/page';
import { navigate } from 'gatsby';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Analytics',
    onClick: () => {
      navigate('analytics/overview');
    },
  },
  {
    text: 'Discover',
  },
];

const headerLinks: ReactNode = (
  <EuiHeaderLinks>
    <EuiHeaderLink>New</EuiHeaderLink>

    <EuiHeaderLink>Open</EuiHeaderLink>

    <EuiHeaderLink>Share</EuiHeaderLink>

    <EuiHeaderLink>Inspect</EuiHeaderLink>

    <EuiButton
      iconType="save"
      style={{ minWidth: 80 }}
      size="s"
      color="secondary">
      Save
    </EuiButton>
  </EuiHeaderLinks>
);

export default () => (
  <KibanaPage
    fullHeight
    pageTitle="Discover"
    breadcrumbs={breadcrumbs}
    headerLinks={headerLinks}
    pageProps={{
      className: 'dscPage',
    }}
    pageBodyProps={{
      className: 'dscPageBody',
    }}>
    <EuiPageHeader style={{ padding: 16 }}>
      <KibanaGlobals />
    </EuiPageHeader>
    <EuiFlexGroup
      className="eui-overflowHidden"
      gutterSize="none"
      responsive={false}>
      <EuiFlexItem grow={false}>
        <EuiPageSideBar className="dscPageSidebar">
          <EuiFlexGroup
            className="eui-fullHeight"
            direction="column"
            alignItems="stretch"
            gutterSize="s"
            responsive={false}>
            <EuiFlexItem grow={false}>
              <EuiButton color="text">
                <strong>kibana_sample_data_ecommerce</strong>
              </EuiButton>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiFieldSearch placeholder="Search field names" />
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiFilterGroup>
                <EuiFilterButton>Filter by type</EuiFilterButton>
              </EuiFilterGroup>
            </EuiFlexItem>
            <EuiFlexItem className="eui-yScroll">
              <img
                className="pageScreenshot"
                alt="Discover sidebar"
                width={288}
                src={sidebarImg}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPageSideBar>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButtonIcon iconType="menuLeft" />
      </EuiFlexItem>
      <EuiFlexItem className="dscPageContent__wrapper">
        <EuiPageContent paddingSize="none" className="eui-fullHeight">
          <EuiFlexGroup
            className="eui-fullHeight"
            direction="column"
            alignItems="stretch"
            gutterSize="none"
            responsive={false}>
            <EuiFlexItem grow={false}>
              <img
                className="pageScreenshot pageScreenshot--fullWidth"
                alt="Discover chart"
                src={chartImg}
              />
            </EuiFlexItem>
            <EuiFlexItem className="eui-yScroll">
              <img
                className="pageScreenshot pageScreenshot--fullWidth"
                alt="Discover table"
                src={tableImg}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPageContent>
      </EuiFlexItem>
    </EuiFlexGroup>
  </KibanaPage>
);
