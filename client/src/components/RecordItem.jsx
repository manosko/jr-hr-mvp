import React from 'react';

const RecordItem = ({page, key, place}) => (
  <div>
    {place}. '{ page[0] }' has a score of { page[1]}
  </div>
)

export default RecordItem;
