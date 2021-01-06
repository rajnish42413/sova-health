import React from 'react';
import { Divider, Typography } from 'antd';

interface IProps {
  level?: 1 | 5 | 2 | 3 | 4 | undefined;
  dividerWidth?: string;
  borderColor?: string;
  textColor?: string;
  children: any;
  className?: string;
}

export default function TTitle({
  level = 1,
  dividerWidth = '80%',
  children,
  className,
  borderColor = '#fff',
  textColor = '#fff'
}: IProps) {
  const style = {
    minWidth: dividerWidth,
    width: dividerWidth,
    borderColor: borderColor,
    borderWidth: '3px',
    margin: '0 auto'
  };
  return (
    <Typography className={className}>
      <Typography.Title level={level} style={{ color: textColor }}>
        {children}
      </Typography.Title>
      <Divider style={style} />
    </Typography>
  );
}
