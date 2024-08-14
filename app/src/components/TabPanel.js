import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';

const TabPanel = React.forwardRef((props, ref) => {
  const { className, ...other } = props;
  return (
    <BaseTabPanel
      ref={ref}
      className={clsx(
        'px-3 dark:bg-slate-900 dark:border-slate-700 rounded-xl w-full font-sans text-sm',
        className,
      )}
      {...other}
    />
  );
});

TabPanel.propTypes = {
  className: PropTypes.string,
};

export default TabPanel;
