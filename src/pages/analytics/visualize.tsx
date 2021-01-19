import React, { useContext, useEffect } from 'react';
import { navigate } from 'gatsby';

import { EuiBreadcrumb } from '@elastic/eui';
// @ts-ignore
import tsvbImg from '../../images/TSVB.png';
import { KibanaPage } from '../../components/kibana/page/page';
import { KibanaChromeContext } from '../../components/kibana/layout';
import { EuiPageHeaderProps } from '../../components/eui/page/page_header_shim';

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

const tabs: EuiPageHeaderProps['tabs'] = [
  {
    label: 'Time series',
  },
  {
    label: 'Metric',
  },
  {
    label: 'Top N',
    isSelected: true,
  },
  {
    label: 'Gauge',
  },
  {
    label: 'Markdown',
  },
  {
    label: 'Tables',
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
      restrictWidth={false}
      pageContentProps={{ paddingSize: 'none' }}
      pageHeader={{
        tabs: tabs,
        time: true,
      }}>
      <div className="pageScreenshot__TBD">
        <img
          className="pageScreenshot pageScreenshot--fullWidth"
          alt="TSVB Gauge chart"
          width={1400}
          src={tsvbImg}
        />
      </div>
    </KibanaPage>
  );
};
