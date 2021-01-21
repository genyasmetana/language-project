import React from 'react';
import './progressBar.scss';

interface IProgressBar {
  done: number;
  height?: number;
}

export const ProgressBar: React.FC<IProgressBar> = ({ done, height }) => {
  const width = done;
  let color = 'transparent';

  if (width <= 20) {
    color = '#DB1F35';
  } else if (width > 20 && width <= 70) {
    color = '#FFC500';
  } else {
    color = '#5489DC';
  }

  const wrapperStyles = {
    height: height || 2,
  };

  const barStyles = {
    width: `${width}%`,
    backgroundColor: color,
  };

  return (
    <div className="progress" style={wrapperStyles}>
      <div className="progress__bar" style={barStyles} />
    </div>
  );
};
