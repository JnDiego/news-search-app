import React, { useState } from 'react';

const useSelect = (initialState, options) => {
  const [state, setState] = useState(initialState);
  const NewsSelect = () => (
    <select className="browser-default">
      <option value="">Select category</option>
    </select>
  );
  return [state, NewsSelect];
};

export default useSelect;
