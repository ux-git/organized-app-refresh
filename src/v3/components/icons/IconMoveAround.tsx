import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconMoveAround = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-move-around" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_4944_2979529"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect y="0.500488" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_4944_2979529)">
          <path
            d="M10.5303 22.0953C10.0251 22.0953 9.54756 21.9889 9.09756 21.776C8.64756 21.5632 8.27128 21.2574 7.96871 20.8587L2.87451 14.2607L3.24374 13.8665C3.49372 13.5998 3.79275 13.4395 4.14081 13.3857C4.4889 13.3318 4.81485 13.3979 5.11869 13.5838L7.55526 14.8915V6.97995C7.55526 6.76745 7.62717 6.58933 7.77099 6.44558C7.91479 6.30183 8.09299 6.22995 8.30559 6.22995C8.51817 6.22995 8.69882 6.30183 8.84754 6.44558C8.99625 6.58933 9.07061 6.76745 9.07061 6.97995V17.5395L6.06864 15.9049L9.18791 19.9703C9.35203 20.1767 9.55204 20.3325 9.78794 20.4376C10.0238 20.5427 10.2713 20.5953 10.5303 20.5953H15.4495C16.0764 20.5953 16.6097 20.377 17.0495 19.9405C17.4892 19.5039 17.7091 18.9722 17.7091 18.3453V14.5761C17.7091 14.2328 17.593 13.945 17.3608 13.7128C17.1285 13.4806 16.8408 13.3645 16.4975 13.3645H11.4553V11.8646H16.4975C17.2507 11.8646 17.891 12.1282 18.4182 12.6554C18.9454 13.1827 19.2091 13.8229 19.2091 14.5761V18.3446C19.2091 19.381 18.8409 20.2652 18.1047 20.9972C17.3684 21.7293 16.4833 22.0953 15.4495 22.0953H10.5303ZM4.41296 9.22993C4.21553 8.89531 4.0649 8.53751 3.96106 8.15653C3.85721 7.77555 3.80529 7.38335 3.80529 6.97995C3.80529 5.73124 4.2431 4.66906 5.11874 3.79343C5.99437 2.9178 7.05654 2.47998 8.30524 2.47998C9.55395 2.47998 10.6161 2.9178 11.4918 3.79343C12.3674 4.66906 12.8052 5.73083 12.8052 6.97873C12.8052 7.38466 12.7533 7.7777 12.6494 8.15783C12.5456 8.53795 12.395 8.89531 12.1975 9.22993L10.9052 8.47996C11.0386 8.24662 11.1386 8.00912 11.2052 7.76746C11.2719 7.52579 11.3052 7.26329 11.3052 6.97995C11.3052 6.14662 11.0136 5.43829 10.4302 4.85495C9.8469 4.27162 9.13857 3.97995 8.30524 3.97995C7.4719 3.97995 6.76357 4.27162 6.18024 4.85495C5.5969 5.43829 5.30524 6.14662 5.30524 6.97995C5.30524 7.26329 5.33857 7.52579 5.40524 7.76746C5.4719 8.00912 5.5719 8.24662 5.70524 8.47996L4.41296 9.22993Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconMoveAround;