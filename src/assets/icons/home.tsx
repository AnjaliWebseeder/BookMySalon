import React from 'react';
import Svg, { Path , Mask ,Rect,G} from 'react-native-svg';

export function HomeIcon(props:{color?:string,size?:number}) {
  return (
  <Svg width={props.size ? props.size : 24} height={props.size ? props.size : 24} viewBox="0 0 16 16" fill="none">
<Mask id="mask0_2254_953"  maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
<Rect width="16" height="16" fill="#D9D9D9"/>
</Mask>
<G mask="url(#mask0_2254_953)">
<Path d="M4 12.6666H6.23083V8.70514H9.76917V12.6666H12V6.66664L8 3.65381L4 6.66664V12.6666ZM3 13.6666V6.16664L8 2.40381L13 6.16664V13.6666H8.76917V9.70514H7.23083V13.6666H3Z" fill={props.color ? props.color : "black"} fill-opacity="0.69"/>
</G>
</Svg>
  );
}


