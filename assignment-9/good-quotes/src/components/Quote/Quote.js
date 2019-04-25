import React, { Component } from 'react';

class Quote extends Component {
  render() {
    return (
      <section>
        <blockquote>Here is my new quote.</blockquote>
        <span className="author">Mike Hunsicker</span>
      </section>
    );
  }
}

export default Quote;
