import React from 'react';
import { navigate } from 'gatsby';

import {
  EuiBreadcrumb,
  EuiPageContent,
  EuiPageContentBody,
  EuiSpacer,
  EuiFieldSearch,
} from '@elastic/eui';
// @ts-ignore
import dashboardImg from '../../images/Dashboard - Listing.png';
import { KibanaPage } from '../../components/kibana/page/page';
import { KibanaPageHeaderPrimaryAddButton } from '../../components/kibana/page/page_header';

const PAGE_TITLE = 'Maps';

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

export default () => (
  <KibanaPage
    pageTitle={PAGE_TITLE}
    breadcrumbs={breadcrumbs}
    pageHeader={{
      restrictWidth: true,
      pageTitle: PAGE_TITLE,
      actionButtons: [
        <KibanaPageHeaderPrimaryAddButton>
          Add map
        </KibanaPageHeaderPrimaryAddButton>,
      ],
    }}>
    <EuiPageContent className="euiPageContent--restrictWidth">
      <EuiPageContentBody>
        <EuiFieldSearch fullWidth placeholder="Search for a by map name..." />
        <EuiSpacer />

        <div className="pageScreenshot__TBD">
          <img
            className="pageScreenshot pageScreenshot--responsive"
            alt="Dashboard listing page"
            width={1212}
            src={dashboardImg}
          />
        </div>
      </EuiPageContentBody>
    </EuiPageContent>
  </KibanaPage>
);
