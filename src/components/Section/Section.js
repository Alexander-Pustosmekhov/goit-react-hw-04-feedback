import React from 'react';

class Section extends React.Component {
  render() {
    return (
      <section>
        {this.props.title}
        {this.props.children}
      </section>
    );
  }
}

export default Section;
