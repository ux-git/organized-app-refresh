import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconLoadingHourglass = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-loading-hourglass" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2653_26742"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect y="0.500488" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2653_26742)">
          <path
            d="M7.90382 20.5005H16.0961V17.5005C16.0961 16.362 15.6981 15.3883 14.9019 14.5793C14.1058 13.7703 13.1384 13.3658 12 13.3658C10.8615 13.3658 9.8942 13.7703 9.09805 14.5793C8.3019 15.3883 7.90382 16.362 7.90382 17.5005V20.5005ZM12 11.6351C13.1384 11.6351 14.1058 11.2306 14.9019 10.4216C15.6981 9.61265 16.0961 8.63893 16.0961 7.50046V4.50046H7.90382V7.50046C7.90382 8.63893 8.3019 9.61265 9.09805 10.4216C9.8942 11.2306 10.8615 11.6351 12 11.6351ZM4.5 22.0004V20.5005H6.40385V17.5005C6.40385 16.3748 6.71187 15.3501 7.3279 14.4264C7.94393 13.5027 8.76029 12.8607 9.77697 12.5005C8.76029 12.1338 7.94393 11.4902 7.3279 10.5697C6.71187 9.6492 6.40385 8.62611 6.40385 7.50046V4.50046H4.5V3.00049H19.5V4.50046H17.5961V7.50046C17.5961 8.62611 17.2881 9.6492 16.672 10.5697C16.056 11.4902 15.2397 12.1338 14.223 12.5005C15.2397 12.8607 16.056 13.5027 16.672 14.4264C17.2881 15.3501 17.5961 16.3748 17.5961 17.5005V20.5005H19.5V22.0004H4.5Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconLoadingHourglass;
