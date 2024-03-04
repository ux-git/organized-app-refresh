import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconDrawLine = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-draw-line" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_4944_2979485"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect y="0.500488" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_4944_2979485)">
          <path
            d="M12.1866 17.4216L20.4943 9.11388C20.5391 9.069 20.5616 9.01451 20.5616 8.95041C20.5616 8.88631 20.5391 8.83182 20.4943 8.78693L19.5212 7.81388C19.4763 7.769 19.4219 7.74656 19.3577 7.74656C19.2936 7.74656 19.2391 7.769 19.1943 7.81388L10.8866 16.1216L12.1866 17.4216ZM5.91158 19.2312C4.42442 19.1478 3.30777 18.8171 2.56163 18.2389C1.81547 17.6607 1.44238 16.8427 1.44238 15.785C1.44238 14.7722 1.86738 13.9507 2.71738 13.3206C3.56738 12.6905 4.74879 12.3088 6.26161 12.1754C6.98854 12.1126 7.53374 11.9812 7.89721 11.7812C8.26067 11.5812 8.44241 11.3043 8.44241 10.9504C8.44241 10.4594 8.19657 10.0847 7.70491 9.82636C7.21324 9.56802 6.40715 9.38245 5.28663 9.26963L5.42316 7.77928C6.96032 7.92543 8.09782 8.25684 8.83563 8.77351C9.57345 9.29017 9.94236 10.0158 9.94236 10.9504C9.94236 11.744 9.63755 12.3731 9.02793 12.8379C8.41833 13.3026 7.53341 13.5818 6.37316 13.6754C5.22956 13.7715 4.37186 13.9946 3.80006 14.3446C3.22826 14.6946 2.94236 15.1748 2.94236 15.785C2.94236 16.4068 3.1805 16.8693 3.65678 17.1725C4.13307 17.4757 4.90518 17.662 5.97313 17.7312L5.91158 19.2312ZM12.4212 19.31L8.99816 15.887L18.3366 6.55813C18.6315 6.26327 18.976 6.11744 19.3702 6.12066C19.7645 6.12386 20.109 6.26968 20.4039 6.55813L21.75 7.90426C22.0449 8.19912 22.1923 8.54527 22.1923 8.94271C22.1923 9.34014 22.0449 9.68629 21.75 9.98116L12.4212 19.31ZM9.08083 20.0004C8.8552 20.0542 8.65648 19.9952 8.48468 19.8235C8.3129 19.6517 8.25393 19.4529 8.30778 19.2273L8.99816 15.887L12.4212 19.31L9.08083 20.0004Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconDrawLine;
