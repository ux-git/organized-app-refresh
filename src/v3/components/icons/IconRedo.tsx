import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconRedo = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-redo" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_4944_2981809"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect y="0.500488" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_4944_2981809)">
          <path
            d="M17.0002 19.0004V17.5005H9.8233C8.77971 17.5005 7.88164 17.1559 7.12907 16.4668C6.37651 15.7777 6.00022 14.9267 6.00022 13.9139C6.00022 12.9011 6.37651 12.0517 7.12907 11.3658C7.88164 10.6799 8.77971 10.337 9.8233 10.337H16.8445L14.0618 13.1197L15.1156 14.1735L19.7021 9.58701L15.1156 5.00049L14.0618 6.05431L16.8445 8.83704H9.8233C8.3605 8.83704 7.10762 9.32517 6.06467 10.3014C5.02174 11.2777 4.50027 12.4819 4.50027 13.9139C4.50027 15.346 5.02174 16.5517 6.06467 17.5312C7.10762 18.5107 8.3605 19.0004 9.8233 19.0004H17.0002Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconRedo;
