import React from 'react';
import { Character } from '../../types';

interface ResultItemProps {
  data: Character;
}

export class ResultItem extends React.Component<ResultItemProps> {
  render() {
    const { data } = this.props;

    return (
      <div className="p-4 bg-amber-100 rounded-2xl flex gap-2 w-[290px]">
        <div className="min-w-[120px] h-[120px] rounded-xl overflow-hidden">
          <img
            src={data.image}
            alt={`${data.name} image`}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <strong>ID: </strong>
            <span>{data.id}</span>
          </div>
          <div>
            <strong>Name: </strong>
            <span>{data.name}</span>
          </div>
          <div>
            <strong>Status: </strong>
            <span>{data.status}</span>
          </div>
        </div>
      </div>
    );
  }
}
