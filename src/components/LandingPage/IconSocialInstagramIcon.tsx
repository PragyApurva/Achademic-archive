import { memo, SVGProps } from 'react';

const IconSocialInstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5 0H11C13.761 0 16 2.239 16 5V11C16 13.761 13.761 16 11 16H5C2.239 16 0 13.761 0 11V5C0 2.239 2.239 0 5 0ZM11 14.5C12.93 14.5 14.5 12.93 14.5 11V5C14.5 3.07 12.93 1.5 11 1.5H5C3.07 1.5 1.5 3.07 1.5 5V11C1.5 12.93 3.07 14.5 5 14.5H11ZM4 8C4 5.791 5.791 4 8 4C10.209 4 12 5.791 12 8C12 10.209 10.209 12 8 12C5.791 12 4 10.209 4 8ZM5.5 8C5.5 9.378 6.622 10.5 8 10.5C9.378 10.5 10.5 9.378 10.5 8C10.5 6.621 9.378 5.5 8 5.5C6.622 5.5 5.5 6.621 5.5 8ZM12.833 3.7C12.833 3.99437 12.5944 4.233 12.3 4.233C12.0057 4.233 11.767 3.99437 11.767 3.7C11.767 3.40564 12.0057 3.167 12.3 3.167C12.5944 3.167 12.833 3.40564 12.833 3.7Z'
      fill='#B0B8BC'
    />
  </svg>
);
const Memo = memo(IconSocialInstagramIcon);
export { Memo as IconSocialInstagramIcon };
