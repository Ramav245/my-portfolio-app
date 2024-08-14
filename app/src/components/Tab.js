import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Tab as BaseTab } from '@mui/base/Tab';

const Tab = React.forwardRef((props, ref) => {
  const { slotProps, ...other } = props;

  // Handle conditional styling within the component itself
  const getRootClassName = (ownerState) => {
    return clsx(
      `font-sans ${
        ownerState.selected
          ? 'text-purple-500 bg-white'
          : 'text-white bg-transparent focus:text-white hover:bg-purple-400'
      } ${
        ownerState.disabled
          ? 'cursor-not-allowed opacity-50'
          : 'cursor-pointer'
      } text-sm leading-[1.3] font-semibold w-full py-2.5 px-3 m-1.5 border-0 rounded-md flex justify-center focus:outline-0 focus:shadow-outline-purple-light`,
      slotProps?.root?.className
    );
  };

  return (
    <BaseTab
      ref={ref}
      {...other}
      slotProps={{
        ...slotProps,
        root: (ownerState) => ({
          ...slotProps?.root,
          className: getRootClassName(ownerState),
        }),
      }}
    />
  );
});

Tab.propTypes = {
  slotProps: PropTypes.shape({
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  }),
};

export default Tab;
