import ReactBreadcrumb from '@jswork/react-breadcrumb';
import './App.css';
import '@jswork/react-breadcrumb/dist/style.css';

function App() {
  const items = [
    { label: '课程', value: '/course', data: {} },
    { label: 'Gneius', value: '/course/gneius', data: {} },
    { label: 'Gneius English1', value: null, data: {} },
  ];

  const templateCustomize = ({ item, plain }, cb) => {
    const { value, label } = item;
    const handler = () => {
      if (!plain) {
        console.log(item);
      }
    };

    const child = plain ? label : <button className="button" children={label} />;

    return (
      <span key={value} onClick={handler} className="is-item">
        {child}
        {cb()}
      </span>
    );
  };

  return (
    <>
      <h1>@jswork/react-breadcrumb</h1>
      <ReactBreadcrumb items={items} template={templateCustomize} />
    </>
  );
}

export default App;
