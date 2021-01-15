import React, { useContext, useEffect } from 'react';

import {
  EuiPage,
  EuiBreadcrumb,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTab,
  EuiTabs,
  EuiPageBody,
} from '@elastic/eui';
// @ts-ignore
import consoleImg from '../images/Dev Tools - Console.png';
import { KibanaChromeContext } from '../components/kibana/layout';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Dev Tools',
  },
];

export default () => {
  const setKibanaContext = useContext(KibanaChromeContext);

  useEffect(() => {
    setKibanaContext.setChrome({
      breadcrumbs,
      pageTitle: 'Dev tools | Console',
    });
  }, [breadcrumbs]);

  return (
    <EuiPage paddingSize="none">
      <EuiPageBody>
        <EuiPageHeader>
          <EuiPageHeaderSection>
            <EuiTabs display="condensed">
              <EuiTab isSelected>Console</EuiTab>
              <EuiTab>Search profiler</EuiTab>
              <EuiTab>Grok debugger</EuiTab>
              <EuiTab>Painless lab</EuiTab>
            </EuiTabs>
          </EuiPageHeaderSection>
        </EuiPageHeader>
        {/** TODO: How to afford for bottom bar displacement outside of body */}
        <EuiPageContent style={{ paddingBottom: 72 }}>
          <EuiPageContentBody>
            <div className="pageScreenshot__TBD">
              <img
                className="pageScreenshot pageScreenshot--fullWidth"
                alt="Dev Tools / Console"
                width={1341}
                src={consoleImg}
              />
            </div>
          </EuiPageContentBody>
        </EuiPageContent>

        {/* {typeof document !== 'undefined' && (
      <EuiBottomBar affordForDisplacement={false} paddingSize="s">
        <EuiButton size="s" color="ghost" minWidth={0}>
          History
        </EuiButton>
        &emsp;
        <EuiButton size="s" color="ghost" minWidth={0}>
          Settings
        </EuiButton>
        &emsp;
        <EuiButton size="s" color="ghost" minWidth={0}>
          Help
        </EuiButton>
      </EuiBottomBar>
    )} */}
      </EuiPageBody>
    </EuiPage>
  );
};
