import React, { useContext, useEffect } from 'react';
import { navigate } from 'gatsby';

import {
  EuiBreadcrumb,
  EuiPageContent,
  EuiPageContentBody,
} from '@elastic/eui';
// @ts-ignore
import tsvbImg from '../../images/TSVB.png';
import { KibanaPage } from '../../components/kibana/page/page';
import { KibanaPageHeaderTabs } from '../../components/kibana/page/page_header';
import { KibanaChromeContext } from '../../components/kibana/layout';

const PAGE_TITLE = 'TSVB';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Analytics',
    onClick: () => {
      navigate('analytics/overview');
    },
  },
  {
    text: 'Visualize',
    href: '#',
  },
  {
    text: PAGE_TITLE,
  },
];

const tabs: KibanaPageHeaderTabs['tabs'] = [
  {
    name: 'Time series',
  },
  {
    name: 'Metric',
  },
  {
    name: 'Top N',
    isSelected: true,
  },
  {
    name: 'Gauge',
  },
  {
    name: 'Markdown',
  },
  {
    name: 'Tables',
  },
];

export default () => {
  const setKibanaContext = useContext(KibanaChromeContext);

  useEffect(() => {
    setKibanaContext.setChrome({
      breadcrumbs,
      pageTitle: PAGE_TITLE,
    });
  }, [breadcrumbs]);

  return (
    <KibanaPage
      pageHeader={{
        tabs: tabs,
        time: true,
      }}>
      <EuiPageContent>
        <EuiPageContentBody>
          <div className="pageScreenshot__TBD">
            <img
              className="pageScreenshot pageScreenshot--fullWidth"
              alt="TSVB Gauge chart"
              width={1400}
              src={tsvbImg}
            />
          </div>
        </EuiPageContentBody>
      </EuiPageContent>
    </KibanaPage>
  );
};
