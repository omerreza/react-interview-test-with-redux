import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { connect } from "react-redux";
import "./App.css";
import { ApplicationState } from "./Reducer";

interface StateProps {
  readonly companies: Company[];
}

export interface Company {
  readonly name: string;
  readonly domain: string;
  readonly logo: string;
}

export class App extends React.Component<StateProps, {}> {
  searchCompanies = (searchText: string) => {
    if (!searchText || searchText === "") {
      return;
    }

    console.log(searchText);
  };

  render() {
    return (
      <div className="App">
        <Typeahead
          options={this.props.companies}
          labelKey={"name"}
          onInputChange={this.searchCompanies}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    companies: state.companies.companies
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
