import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
export const Notification = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_2573_75)">
      <Path
        d="M12.5 3.02297C10.8333 2.87405 7 3.38038 5 6.59707C2.5 10.6179 5 19.1065 1.5 20H12.5"
        stroke="black"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <Path
        d="M11.5 3.02297C13.1667 2.87405 17 3.38038 19 6.59707C21.5 10.6179 19 19.1065 22.5 20H11.5"
        stroke="black"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <Path
        d="M9 22C9.50495 23.1773 10.6582 24 12 24C13.3418 24 14.495 23.1773 15 22H9Z"
        fill="black"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7324 3C13.9026 2.70583 14 2.36429 14 2C14 0.89543 13.1046 0 12 0C10.8954 0 10 0.89543 10 2C10 2.36429 10.0974 2.70583 10.2676 3H13.7324Z"
        fill="black"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_2573_75">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

