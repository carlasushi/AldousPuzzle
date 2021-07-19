import React from "react";


export default class FetchRandomQuote extends React.Component {
  state = {
    loading: true,
    quote: null
  };

  async componentDidMount() {
    const url = "https://quotable.io/random?author=aldous-huxley";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ quote: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.quote) {
      return <div>didn't get a quote</div>;
    }

    return (
      <div>
        <div>{this.state.quote.content}</div>
      </div>
    );
  }
}