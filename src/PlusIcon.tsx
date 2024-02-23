import React from 'react';
import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
const PlusIcon = () => {
  return (
    <Svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <Rect width="64" height="64" rx="32" fill="#F54749" />
      <Path
        d="M20 32H44M32 20V44"
        stroke="#FCFCFC"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default PlusIcon;
