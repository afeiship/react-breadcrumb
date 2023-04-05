import React from 'react';
import ReactBreadcrumb from '../../src/main';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: 30px auto 0;
`;

export default () => {
  const items = [
    { label: '课程', value: '/course', data: {} },
    { label: 'Gneius', value: '/course/gneius', data: {} },
    { label: 'Gneius English1', value: null, data: {} }
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
    <Container>
      <ReactBreadcrumb items={items} template={templateCustomize} />
    </Container>
  );
};
