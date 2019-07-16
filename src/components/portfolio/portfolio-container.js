import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Wellcome to my portfolio",
      data: [
        { title: "Quip", category: "eCommerce" },
        { title: "Eventbrite", category: "Scheduling" },
        { title: "Ministry Safe", category: "Enterprise" },
        { title: "SwingAway", category: "eCommerce" }
      ]
    };
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter
    });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} url={"google.com"} />;
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        {this.portfolioItems()}
      </div>
    );
  }
}
