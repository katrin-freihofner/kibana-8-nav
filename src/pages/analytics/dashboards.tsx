import React, { useContext, useEffect } from 'react';
import { Link, navigate } from 'gatsby';

import { EuiBreadcrumb, EuiSpacer, EuiFieldSearch } from '@elastic/eui';
// @ts-ignore
import dashboardImg from '../../images/Dashboard - Listing.png';
import { KibanaPage } from '../../components/kibana/page/page';
import {
  KibanaPageHeaderPrimaryAddButton,
  KibanaPageHeaderProps,
} from '../../components/kibana/page/page_header';
import { KibanaChromeContext } from '../../components/kibana/layout';

const PAGE_TITLE = 'Dashboards';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Analytics',
    onClick: () => {
      navigate('analytics/overview');
    },
  },
  {
    text: PAGE_TITLE,
  },
];

const pageHeader: KibanaPageHeaderProps = {
  pageTitle: PAGE_TITLE,
  restrictWidth: true,
  actionButtons: [
    <KibanaPageHeaderPrimaryAddButton>
      Add dashboard
    </KibanaPageHeaderPrimaryAddButton>,
  ],
};

export default () => {
  const setKibanaContext = useContext(KibanaChromeContext);

  useEffect(() => {
    setKibanaContext.setChrome({
      breadcrumbs,
      pageTitle: PAGE_TITLE,
    });
  }, [breadcrumbs]);

  return (
    <KibanaPage pageHeader={pageHeader}>
      <EuiFieldSearch fullWidth placeholder="Search for by dashboard name..." />
      <EuiSpacer />
      <Link
        className="pageScreenshot__TBD"
        to="/analytics/dashboards/logs-web-traffic">
        <img
          className="pageScreenshot pageScreenshot--responsive"
          alt="Dashboard listing page"
          width={1212}
          src={dashboardImg}
        />
      </Link>
    </KibanaPage>
  );
};
