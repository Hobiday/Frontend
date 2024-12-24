import type { SVGProps } from "react";
const SvgHomeDefault = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 18 20" {...props}>
    <path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="m1 7 8-6 8 6v12h-5v-7H6v7H1z" />
  </svg>
);
export default SvgHomeDefault;
