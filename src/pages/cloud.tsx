import React from 'react';
import { Link } from 'gatsby';

// @ts-ignore
import cloudImg from '../images/Cloud - Home.png';
import { KibanaPage } from '../components/kibana/page/page';
import { EuiBreadcrumb } from '@elastic/eui';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Overview',
  },
];

export default () => {
  return (
    <KibanaPage pageTitle="Cloud" breadcrumbs={breadcrumbs}>
      <div className="eui-textCenter">
        <Link className="pageScreenshot__TBD" to="cloud/deployments">
          <img
            className="pageScreenshot"
            alt="Blank table"
            width={1638}
            src={cloudImg}
          />
        </Link>
      </div>
    </KibanaPage>
  );
};
