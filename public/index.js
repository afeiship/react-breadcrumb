import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactBreadcrumb from '../src/main';
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
