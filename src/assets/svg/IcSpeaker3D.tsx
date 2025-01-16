import type { SVGProps } from 'react';

const SvgIcSpeaker3D = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 52 52"
    {...props}>
    <path fill="url(#ic_speaker_3d_svg__a)" d="M0 0h52v52H0z" />
    <defs>
      <pattern id="ic_speaker_3d_svg__a" width={1} height={1} patternContentUnits="objectBoundingBox">
        <use xlinkHref="#ic_speaker_3d_svg__b" transform="scale(.001)" />
      </pattern>
      <image
        id="ic_speaker_3d_svg__b"
        width={1000}
        height={1000}
      />
    </defs>
  </svg>
);
export default SvgIcSpeaker3D;