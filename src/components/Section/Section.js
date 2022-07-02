import React from 'react';
import PropTypes from 'prop-types';
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

Section.propTypes = { title: PropTypes.string, className: PropTypes.string };

export default Section;
