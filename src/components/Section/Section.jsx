import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Section.module.css'

export class Section extends Component {
  render() {
    return (
      <section className={css.container}>
        <h2 className={css.title}>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};


