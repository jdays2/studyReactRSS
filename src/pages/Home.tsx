import React from 'react';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { Result } from '../components/Result/Result';
import { Loader } from '../components/Loader/Loader';
import { API_CHARACTERS } from '../constants/api';
import { ApiRespond } from '../types';

interface HomeProps {}

interface HomeState {
  isLoading: boolean;
  isError: boolean;
  data: ApiRespond | null;
  searchValue: string;
}

export interface fetchDataArgs {
  search?: string;
  page?: number;
  id?: number;
}

export class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      isLoading: false,
      isError: false,
      data: null,
      searchValue: '',
    };
  }
  updateData(result: any) {
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
    const { searchValue } = this.state;
    if (!searchValue) {
      this.fetchData({});
    }
  }

  render() {
    const { isLoading, data } = this.state;
    return (
      <main className="flex flex-col gap-6 bg-red-200 py-10">
        <SearchBar onSubmit={this.fetchData} />
        {isLoading ? <Loader /> : <Result data={data ? data.results : []} />}
      </main>
    );
  }
}
