import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconMinistryReport = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-ministry-report" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2515_23754"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect y="0.500488" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2515_23754)">
          <path
            d="M5.3077 19.5005H14V14.5005H19V5.80819C19 5.71844 18.9711 5.64471 18.9134 5.58701C18.8557 5.52931 18.782 5.50046 18.6923 5.50046H5.3077C5.21795 5.50046 5.14423 5.52931 5.08653 5.58701C5.02883 5.64471 4.99997 5.71844 4.99997 5.80819V19.1927C4.99997 19.2825 5.02883 19.3562 5.08653 19.4139C5.14423 19.4716 5.21795 19.5005 5.3077 19.5005ZM5.3077 21.0004C4.80898 21.0004 4.38302 20.8238 4.02982 20.4706C3.67661 20.1174 3.5 19.6915 3.5 19.1927V5.80819C3.5 5.30947 3.67661 4.88351 4.02982 4.53031C4.38302 4.1771 4.80898 4.00049 5.3077 4.00049H18.6923C19.191 4.00049 19.6169 4.1771 19.9701 4.53031C20.3233 4.88351 20.5 5.30947 20.5 5.80819V15.1447L14.6442 21.0004H5.3077ZM7.44233 14.2312V12.7312H12V14.2312H7.44233ZM7.44233 10.2504V8.75049H16.5576V10.2504H7.44233Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconMinistryReport;
