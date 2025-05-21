import Svg, { Path , Mask ,Rect,G} from 'react-native-svg';
import React from 'react';
import appColors from '../../theme/appColors';

export function Arrow(props:{color?:string}) {
  return (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
<Mask id="mask0_2015_159" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<Rect width="24" height="24" fill={appColors.white}/>
</Mask>
<G mask="url(#mask0_2015_159)">
<Path d="M12.9462 11.9999L8.34619 7.39994L9.39994 6.34619L15.0537 11.9999L9.39994 17.6537L8.34619 16.5999L12.9462 11.9999Z" fill={'rgba( 204 , 198 , 193 , 0.9)'}/>
</G>
</Svg>
  );
}

