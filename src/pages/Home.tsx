import React from 'react';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { Result } from '../components/Result/Result';
import { Loader } from '../components/Loader/Loader';
import { API_CHARACTERS } from '../constants/api';

interface HomeProps {}

export class Home extends React.Component {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      isLoading: true,
      isError: false,
      data: [],
      searchValue: '',
    };
  }
  updateData(result: any) {
    this.setState({ data: result });
  }
  componentDidMount() {
    fetch(API_CHARACTERS)
      .then((response) => response.json())
      .then((r) => this.updateData(r));
  }
  render() {
    return (
      <main className="flex flex-col gap-6 bg-red-200 py-10">
        <SearchBar />
        <Result />
        <Loader />
      </main>
    );
  }
}
