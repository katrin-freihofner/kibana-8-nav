import React, { FunctionComponent, ReactNode } from 'react';
import {
  EuiPageHeader,
  EuiPageHeaderSection,
  IconType,
  EuiTabsProps,
  ExclusiveUnion,
  EuiTab,
  EuiIcon,
  EuiText,
  EuiTabs,
  CommonProps,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiButtonProps,
} from '@elastic/eui';
import classNames from 'classnames';
import { EuiSuperDatePicker } from '../../eui/super_date_picker';

export const ALIGN_ITEMS = ['top', 'bottom', 'middle'] as const;

type EuiTabProps = React.ComponentProps<typeof EuiTab>;

export type KibanaPageHeaderTitle = {
  /**
   * Wrapped in an `H1` so choose appropriately
   */
  pageTitle: ReactNode;
  /**
   * Optional icon to place to the left of the title
   */
  iconType?: IconType;
  /**
   * Wrapped in a subtle paragraph
   */
  description?: IconType;
};

export type KibanaPageHeaderTabs = {
  /**
   * In-app navigation
   */
  tabs: (EuiTabProps & {
    name: string;
  })[];
  /**
   * Any extras to apply to the outer tabs container
   */
  tabsProps?: EuiTabsProps;
};

/**
 * The left side can either be a title with optional description and icon;
 * Or a list of tabs
 */
type KibanaPageHeaderLeft = ExclusiveUnion<
  ExclusiveUnion<KibanaPageHeaderTitle, KibanaPageHeaderTabs>,
  {
    /**
     * Pass custom content to the left side with `leftSideContent`
     */
    leftSideContent: ReactNode;
  }
>;

type KibanaPageHeaderTime = {
  /**
   * Would normally be EuiSuperDatePicker props, but
   * we're faking the component so just check for true
   */
  time: true;
};

/**
 * The right side can either be up to 3 buttons, one being primary
 * Or the time picker,
 * Or a simple node
 */
type KibanaPageHeaderRight = ExclusiveUnion<
  ExclusiveUnion<
    {
      /**
       * The first button in the list will should always be primary/filled
       */
      actionButtons?: ReactNode[];
    },
    {
      /**
       * Pass custom content to the left side with `leftSideContent`
       */
      rightSideContent?: ReactNode;
    }
  >,
  KibanaPageHeaderTime
>;

export type KibanaPageHeaderProps = CommonProps &
  KibanaPageHeaderLeft &
  KibanaPageHeaderRight & {
    restrictWidth?: boolean;
    alignItems?: typeof ALIGN_ITEMS[number];
  };

export const KibanaPageHeaderPrimaryAddButton: FunctionComponent<EuiButtonProps> = ({
  ...buttonProps
}) => <EuiButton iconType="plusInCircleFilled" {...buttonProps} fill />;

export const KibanaPageHeader: FunctionComponent<KibanaPageHeaderProps> = ({
  pageTitle,
  iconType,
  description,
  tabs,
  tabsProps,
  className,
  actionButtons = [],
  leftSideContent,
  rightSideContent,
  time,
  restrictWidth = false,
  alignItems = 'middle',
}) => {
  const classes = classNames(
    {
      'euiPageHeader--restrictWidth': restrictWidth,
      'euiPageHeader--solutionHeading': iconType,
    },
    `euiPageHeader--${alignItems}`,
    className
  );

  if (!leftSideContent && pageTitle) {
    const icon = iconType ? (
      <EuiIcon
        type={iconType}
        size="xl"
        style={{ verticalAlign: 'baseline', marginRight: 16 }}
      />
    ) : undefined;

    leftSideContent = (
      <EuiText>
        <h1>
          {icon}
          {pageTitle}
        </h1>
        {description && <p>{description}</p>}
      </EuiText>
    );
  } else if (!leftSideContent && tabs) {
    const renderTabs = () => {
      return tabs.map((tab, index) => {
        const { name, ...tabRest } = tab;
        return (
          <EuiTab key={index} {...tabRest}>
            {name}
          </EuiTab>
        );
      });
    };

    leftSideContent = (
      <EuiTabs {...tabsProps} display="condensed">
        {renderTabs()}
      </EuiTabs>
    );
  }

  if (!rightSideContent && time) {
    rightSideContent = <EuiSuperDatePicker />;
  } else if (!rightSideContent && actionButtons!.length) {
    const renderButtons = () => {
      return actionButtons.map((button, index) => {
        return (
          <EuiFlexItem grow={false} key={index}>
            {button}
          </EuiFlexItem>
        );
      });
    };

    rightSideContent = (
      <EuiFlexGroup wrap responsive={false} direction="rowReverse">
        {renderButtons()}
      </EuiFlexGroup>
    );
  }

  return (
    <EuiPageHeader className={classes}>
      <EuiPageHeaderSection>{leftSideContent}</EuiPageHeaderSection>
      {rightSideContent && (
        <EuiPageHeaderSection>{rightSideContent}</EuiPageHeaderSection>
      )}
    </EuiPageHeader>
  );
};
