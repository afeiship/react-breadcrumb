# react-breadcrumb
> Breadcrumb for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-breadcrumb
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| items     | array  | false    | []      | The breadcrumb routes.                |
| template  | func   | false    | -       | The link component callback.          |
| separator | union  | false    | '/'     | The breadcrumb separator.             |


## usage
1. import css
  ```scss
  @import "~@jswork/react-breadcrumb/dist/style.css";

  // or use sass
  @import "~@jswork/react-breadcrumb/dist/style.scss";

  // customize your styles:
  $react-breadcrumb-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactBreadcrumb from '@jswork/react-breadcrumb';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      items: [
        { label: '课程', value: '/course', data: {} },
        { label: 'Gneius', value: '/course/gneius', data: {} },
        { label: 'Gneius English1', value: null, data: {} }
      ]
    };

    templateCustomize = ({ item, plain }, cb) => {
      const { value, label } = item;
      const handler = () => {
        if (!plain) {
          console.log(item);
        }
      };

      const child = plain ? (
        label
      ) : (
        <button className="button" children={label} />
      );

      return (
        <span key={value} onClick={handler} className="is-item">
          {child}
          {cb()}
        </span>
      );
    };

    handleClick = (inItem) => {
      console.log('click item:', inItem);
    };

    render() {
      const { items } = this.state;

      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-breadcrumb">
          <ReactBreadcrumb items={items} />
          <ReactBreadcrumb
            items={items}
            separator={<strong>|</strong>}
            template={this.templateCustomize}
          />
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-breadcrumb/


## license
Code released under [the MIT license](https://github.com/afeiship/react-breadcrumb/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-breadcrumb
[version-url]: https://npmjs.org/package/@jswork/react-breadcrumb

[license-image]: https://img.shields.io/npm/l/@jswork/react-breadcrumb
[license-url]: https://github.com/afeiship/react-breadcrumb/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-breadcrumb
[size-url]: https://github.com/afeiship/react-breadcrumb/blob/master/dist/react-breadcrumb.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-breadcrumb
[download-url]: https://www.npmjs.com/package/@jswork/react-breadcrumb
