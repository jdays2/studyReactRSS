import React from 'react';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { Result } from '../components/Result/Result';
import { Loader } from '../components/Loader/Loader';
import { API_CHARACTERS } from '../constants/api';
import { ApiRespond } from '../types';
import { getFromLocalStorage } from '../hooks/getFromLocalStorage';

interface HomeState {
  isLoading: boolean;
  isError: boolean;
  data: ApiRespond | null;
}

export interface fetchDataArgs {
  search?: string;
  page?: number;
  id?: number;
}

export class Home extends React.Component<unknown, HomeState> {
  state: HomeState = {
    isLoading: false,
    isError: false,
    data: null,
  };

  updateData(result: ApiRespond) {
    this.setState({ data: result });
  }

  updateLoading(value: boolean) {
    this.setState({ isLoading: value });
  }

  fetchData = ({ search, page, id }: fetchDataArgs) => {
    const url = `${API_CHARACTERS}${page ? `?page=${page}` : id ? `/${id}` : search ? `?name=${search}` : ''}`;

    this.updateLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((r) => this.updateData(r))
      .finally(() => {
        this.updateLoading(false);
      });
  };

  componentDidMount() {
    const storedSearchValue = getFromLocalStorage('searchValue');
    if (!storedSearchValue) {
      return this.fetchData({});
    }
    this.fetchData({ search: JSON.parse(storedSearchValue) });
  }

  render() {
    const { isLoading, data } = this.state;
    return (
      <main className="flex flex-col gap-6 bg-red-200 py-10 h-[100vh] rounded-2xl">
        <SearchBar onSubmit={this.fetchData} />
        {isLoading ? <Loader /> : <Result data={data ? data.results : []} />}
        <ErrorButton />
      </main>
    );
  }
}

class ErrorButton extends React.Component {
  state = {
    isError: false,
  };

  updateError = () => {
    this.setState({ isError: true });
  };

  render() {
    if (this.state.isError) {
      throw new Error('Button generated an error!');
    }
    return (
      <button
        onClick={this.updateError}
        className="p-2 px-3 rounded-2xl bg-gray-900 text-white cursor-pointer w-fit mx-auto"
      >
        Generate Error
      </button>
    );
  }
}
