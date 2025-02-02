import React from 'react';
import { fetchDataArgs } from '../../pages/Home';

interface SearchBarProps {
  onSubmit: (object: fetchDataArgs) => void;
}
interface SearchBarState {
  searchValue: string;
}

export class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  componentDidMount() {
    const storedData = localStorage.getItem('searchValue');
    if (storedData) {
      this.setState({ searchValue: JSON.parse(storedData) });
    }
  }

  searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    this.setState({ searchValue: newValue });
  };

  onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { searchValue } = this.state;
    localStorage.setItem('searchValue', JSON.stringify(searchValue));
    onSubmit({ search: searchValue });
  };

  render() {
    const { searchValue } = this.state;
    return (
      <section className="container mx-auto ">
        <form
          onSubmit={this.onSearchSubmit}
          className="flex gap-2 bg-amber-400 p-3 rounded-3xl w-fit mx-auto"
        >
          <input
            value={searchValue}
            onChange={this.searchChange}
            className="p-2 px-4 bg-white rounded-2xl w-2xl"
            placeholder="Search"
          />
          <button
            type="submit"
            className="p-2 px-3 rounded-2xl bg-amber-100 hover:cursor-pointer"
          >
            Submit
          </button>
        </form>
      </section>
    );
  }
}
