import noop from '@jswork/noop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactList from '@jswork/react-list';

const CLASS_NAME = 'react-breadcrumb';
const DEFAULT_TEMPLATE = ({ item, plain }, cb) => {
  const { value, label } = item;
  const child = plain ? label : <a href={value} children={label} />;
  return (
    <span key={value} className="is-item">
      {child}
      {cb()}
    </span>
  );
};

export default class ReactBreadcrumb extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The breadcrumb routes.
     */
    items: PropTypes.array,
    /**
     * The link component callback.
     */
    template: PropTypes.func,
    /**
     * The breadcrumb separator.
     */
    separator: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  };

  static defaultProps = {
    items: [],
    separator: '/',
    template: DEFAULT_TEMPLATE
  };

  handleTemplate = ({ item, index }) => {
    const { separator, template, items } = this.props;
    const plain = index === items.length - 1;
    const cb = () => <span className="is-separator">{separator}</span>;
    return template({ item, plain, index }, cb);
  };

  render() {
    const { className, separator, template, ...props } = this.props;
    return (
      <ReactList
        nodeName="div"
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        template={this.handleTemplate}
        {...props}
      />
    );
  }
}
