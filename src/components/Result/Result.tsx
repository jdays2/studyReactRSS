import React from 'react';
import { Character } from '../../types';
import { ResultItem } from '../ResultItem/ResultItem';
import { NotFound } from '../NotFound/NotFound';

interface ResultProps {
  data: Character[] | null;
}

export class Result extends React.Component<ResultProps> {
  render() {
    const { data } = this.props;

    return (
      <section className="container mx-auto bg-amber-400 p-3 rounded-3xl">
        <div className="flex gap-3 flex-wrap min-h-[400px]">
          {data ? (
            data.map((e: Character) => <ResultItem data={e} key={e.id} />)
          ) : (
            <NotFound />
          )}
        </div>
      </section>
    );
  }
}
