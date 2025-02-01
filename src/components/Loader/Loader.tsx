import React from 'react';

export class Loader extends React.Component {
  render() {
    return (
      <div className="flex flex-col gap-3 m-auto rounded-2xl bg-white p-4 items-center">
        <div className="w-[38px] ">
          <img src="/src/assets/gif/loader.gif" alt="loading-gif" />
        </div>
        <p>Loading...</p>
      </div>
    );
  }
}
