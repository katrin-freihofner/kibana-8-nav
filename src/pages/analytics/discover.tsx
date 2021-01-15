import React, { ReactNode, useContext, useEffect } from 'react';

import {
  EuiBreadcrumb,
  EuiPageHeader,
  EuiButton,
  EuiHeaderLink,
  EuiHeaderLinks,
  EuiPageContent,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFieldSearch,
  EuiFilterButton,
  EuiFilterGroup,
  EuiResizableContainer,
  EuiPageBody,
  EuiPage,
} from '@elastic/eui';
// @ts-ignore
import sidebarImg from '../../images/Discover - sidebar.svg';
// @ts-ignore
import chartImg from '../../images/Discover - chart.svg';
// @ts-ignore
import tableImg from '../../images/Discover - table.svg';

import { KibanaGlobals } from '../../components/kibana/chrome/globals';
import { navigate } from 'gatsby';
import { KibanaChromeContext } from '../../components/kibana/layout';

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

const sideBar = (
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
      <EuiFieldSearch placeholder="Search field names" fullWidth />
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      <EuiFilterGroup>
        <EuiFilterButton>Filter by type</EuiFilterButton>
      </EuiFilterGroup>
    </EuiFlexItem>
    <EuiFlexItem className="eui-yScroll">
      <div className="pageScreenshot__TBD">
        <img
          className="pageScreenshot pageScreenshot--fullWidth"
          alt="Discover sidebar"
          src={sidebarImg}
        />
      </div>
    </EuiFlexItem>
  </EuiFlexGroup>
);

export default () => {
  const setKibanaContext = useContext(KibanaChromeContext);

  useEffect(() => {
    setKibanaContext.setChrome({
      breadcrumbs,
      headerLinks,
      pageTitle: 'Discover',
    });
  }, [breadcrumbs, headerLinks]);

  return (
    <EuiPage paddingSize="none" className="dscPage">
      <EuiPageBody className="dscPageBody">
        <EuiPageHeader style={{ padding: 16 }}>
          <KibanaGlobals />
        </EuiPageHeader>
        <EuiResizableContainer>
          {(EuiResizablePanel, EuiResizableButton) => (
            <>
              <EuiResizablePanel
                mode="collapsible"
                initialSize={25}
                // TODO: Fix: miSize isn't respected on page load
                minSize={'260px'}
                paddingSize="none"
                className="euiPageSideBar dscPageSidebar">
                {sideBar}
              </EuiResizablePanel>

              <EuiResizableButton style={{}} />

              <EuiResizablePanel
                mode="main"
                initialSize={85}
                minSize="600px"
                paddingSize="none"
                className="dscPageContent__wrapper">
                <EuiPageBody>
                  <EuiPageContent paddingSize="none" className="eui-fullHeight">
                    <EuiFlexGroup
                      className="eui-fullHeight"
                      direction="column"
                      alignItems="stretch"
                      gutterSize="none"
                      responsive={false}>
                      <EuiFlexItem grow={false}>
                        <div className="pageScreenshot__TBD">
                          <img
                            className="pageScreenshot pageScreenshot--fullWidth"
                            alt="Discover chart"
                            src={chartImg}
                          />
                        </div>
                      </EuiFlexItem>
                      <EuiFlexItem className="eui-yScroll">
                        <div className="pageScreenshot__TBD">
                          <img
                            className="pageScreenshot pageScreenshot--fullWidth"
                            alt="Discover table"
                            src={tableImg}
                          />
                        </div>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  </EuiPageContent>
                </EuiPageBody>
              </EuiResizablePanel>
            </>
          )}
        </EuiResizableContainer>
      </EuiPageBody>
    </EuiPage>
  );
};
