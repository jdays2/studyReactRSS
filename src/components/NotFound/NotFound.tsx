import React from 'react';
import { getFromLocalStorage } from '../../hooks/getFromLocalStorage';

export class NotFound extends React.Component {
  render() {
    const storedSearchValue = getFromLocalStorage('searchValue');
    return (
      <div className="bg-white rounded-2xl w-full">
        <p className="text-2xl text-black text-center pt-6">
          Nothing was found for the request <strong>{storedSearchValue}</strong>
        </p>
      </div>
    );
  }
}
