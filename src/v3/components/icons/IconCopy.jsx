import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconCopy = ({ color = '#222222', width = 24, height = 24, sx = {} }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon id="organized-icon-copy" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2821_80963"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2821_80963)">
          <path
            d="M9.05765 17.5C8.55252 17.5 8.12496 17.325 7.77498 16.975C7.42498 16.625 7.24998 16.1974 7.24998 15.6923V4.3077C7.24998 3.80257 7.42498 3.375 7.77498 3.025C8.12496 2.675 8.55252 2.5 9.05765 2.5H17.4422C17.9473 2.5 18.3749 2.675 18.7249 3.025C19.0749 3.375 19.2499 3.80257 19.2499 4.3077V15.6923C19.2499 16.1974 19.0749 16.625 18.7249 16.975C18.3749 17.325 17.9473 17.5 17.4422 17.5H9.05765ZM9.05765 16H17.4422C17.5191 16 17.5897 15.9679 17.6538 15.9038C17.7179 15.8397 17.7499 15.7692 17.7499 15.6923V4.3077C17.7499 4.23077 17.7179 4.16024 17.6538 4.09613C17.5897 4.03203 17.5191 3.99998 17.4422 3.99998H9.05765C8.98072 3.99998 8.9102 4.03203 8.8461 4.09613C8.78198 4.16024 8.74993 4.23077 8.74993 4.3077V15.6923C8.74993 15.7692 8.78198 15.8397 8.8461 15.9038C8.9102 15.9679 8.98072 16 9.05765 16ZM5.55768 20.9999C5.05256 20.9999 4.625 20.8249 4.275 20.4749C3.925 20.1249 3.75 19.6973 3.75 19.1922V6.3077H5.24998V19.1922C5.24998 19.2692 5.28202 19.3397 5.34613 19.4038C5.41024 19.4679 5.48076 19.5 5.55768 19.5H15.4422V20.9999H5.55768Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

IconCopy.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sx: PropTypes.object,
};

export default IconCopy;