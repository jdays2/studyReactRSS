import React from 'react';
import { getFromLocalStorage } from '../../utils/getFromLocalStorage';

export class NotFound extends React.Component {
  render() {
    const storedSearchValue = getFromLocalStorage('searchValue');
    return (
      <div className="bg-white rounded-2xl w-full flex gap-2 flex-col items-center">
        <p className="text-2xl text-black text-center pt-6">
          Nothing was found for the request <strong>{storedSearchValue}</strong>
        </p>

        <div className="w-[270px]">
          <img src="/src/assets/gif/rick.gif" alt="rick-face-gif" />
        </div>
      </div>
    );
  }
}
