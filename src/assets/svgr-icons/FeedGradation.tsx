import { SVGProps } from "react";

export default function FeedGradationIcon({
  width = 24,
  height = 24,
  ...props
}: SVGProps<SVGSVGElement> & { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 6H6V17H12.6981L12.7445 20.6579L16.1197 17H22V6Z"
        fill="#E7E6ED"
      />
      <path
        d="M12 23C11.7348 23 11.4804 22.8946 11.2929 22.7071C11.1054 22.5196 11 22.2652 11 22V19H7C6.46957 19 5.96086 18.7893 5.58579 18.4142C5.21071 18.0391 5 17.5304 5 17V7C5 6.46957 5.21071 5.96086 5.58579 5.58579C5.96086 5.21071 6.46957 5 7 5H21C21.5304 5 22.0391 5.21071 22.4142 5.58579C22.7893 5.96086 23 6.46957 23 7V17C23 17.5304 22.7893 18.0391 22.4142 18.4142C22.0391 18.7893 21.5304 19 21 19H16.9L13.2 22.71C13 22.89 12.76 23 12.5 23H12ZM13 17V20.08L16.08 17H21V7H7V17H13ZM3 15H1V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H19V3H3V15ZM9 9H19V11H9V9ZM9 13H17V15H9V13Z"
        fill="url(#paint0_linear_2204_12960)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2204_12960"
          x1="-4.5"
          y1="-0.5"
          x2="23"
          y2="21"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B1F9F3" />
          <stop offset="1" stopColor="#5E50F4" />
        </linearGradient>
      </defs>
    </svg>
  );
}
