import React from 'react';
import { Link } from 'gatsby';

// @ts-ignore
import cloudImg from '../images/Cloud - Home.png';
import { KibanaPage } from '../components/kibana/page/page';

export default () => {
  return (
    <KibanaPage pageTitle="Cloud">
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
