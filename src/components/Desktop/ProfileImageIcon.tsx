import { memo, SVGProps } from 'react';

const ProfileImageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio='none'
    viewBox='0 0 489 489'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <circle cx={244.5} cy={244.5} r={244.5} fill='url(#pattern0)' />
    <defs>
      <pattern id='pattern0' patternContentUnits='objectBoundingBox' width={1} height={1}>
        <use xlinkHref='#image0_2_205' transform='scale(0.000488281)' />
      </pattern>
      <image
        id='image0_2_205'
        width={2048}
        height={2048}
      />
    </defs>
  </svg>
);
const Memo = memo(ProfileImageIcon);
export { Memo as ProfileImageIcon };