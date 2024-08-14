import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';

const TabsList = React.forwardRef((props, ref) => {
  const { className, ...other } = props;
  return (

    <BaseTabsList
      ref={ref}
      className={clsx(
        'absolute top-5 right-12 mb-4 rounded-xl bg-slate-300 flex font-sans items-center justify-center content-between min-w-tabs-list shadow-lg',
        className,
      )}
      {...other}
    />
  );
});

TabsList.propTypes = {
  className: PropTypes.string,
};

export default TabsList;
