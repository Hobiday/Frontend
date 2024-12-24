import type { SVGProps } from "react";
const SvgFeedDefault = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none" {...props}>
    <path
      fill="currentColor"
      d="M11 22a1 1 0 0 1-1-1v-3H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29zm1-6v3.08L15.08 16H20V6H6v10zM2 14H0V2a2 2 0 0 1 2-2h16v2H2zm6-6h10v2H8zm0 4h8v2H8z"
    />
  </svg>
);
export default SvgFeedDefault;
