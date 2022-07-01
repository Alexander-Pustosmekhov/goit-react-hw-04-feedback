import React from 'react';
import s from './Section.module.css';

class Section extends React.Component {
  render() {
    return (
      <section className={s.section}>
        <h2 className={s.title}>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}

export default Section;
