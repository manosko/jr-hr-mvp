import React from 'react';
import RecordItem from './RecordItem.jsx';

const Records = ({strong, far}) => {
  // strong and far, each is array of 2 item arrays
  var strong = strong.sort((x,y) => x[1]<y[1]).slice(0,3)
  var far = far.sort((x,y) => x[1]<y[1]).slice(0,3)
  // console.log(`strong: ${strong.sort((x,y)=>x[1]<y[1]).slice(0,3)}`);
  return (
  <div>
    {/* There are { props.length } items. */}
    <h4> Strongest </h4>
    { strong.map((page, i) => <RecordItem page={page} key={i} place={i+1}/>)}
    <h4> Farthest </h4>
    { far.map((page, i) => <RecordItem page={page} key={i} place={i+1}/>) }
  </div>
)}

export default Records;
