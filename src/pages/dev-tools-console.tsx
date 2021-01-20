import React, { useContext, useEffect } from 'react';

import { EuiBreadcrumb, EuiTab, EuiTabs } from '@elastic/eui';
import { KibanaChromeContext } from '../components/kibana/layout';
import { KibanaPage } from '../components/kibana/chrome/page/page';

// @ts-ignore
import consoleImg from '../images/Dev Tools - Console.png';

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
    <KibanaPage
      restrictWidth={false}
      pageHeader={{
        leftSideContent: (
          <EuiTabs display="condensed">
            <EuiTab isSelected>Console</EuiTab>
            <EuiTab>Search profiler</EuiTab>
            <EuiTab>Grok debugger</EuiTab>
            <EuiTab>Painless lab</EuiTab>
          </EuiTabs>
        ),
      }}>
      {/** TODO: How to afford for bottom bar displacement outside of body */}
      <div className="pageScreenshot__TBD" style={{ paddingBottom: 72 }}>
        <img
          className="pageScreenshot pageScreenshot--fullWidth"
          alt="Dev Tools / Console"
          width={1341}
          src={consoleImg}
        />
      </div>

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
    </KibanaPage>
  );
};
