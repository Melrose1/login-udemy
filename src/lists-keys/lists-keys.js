import { useEffect, useState } from 'react';

const jsonData = [
  {
    key: '1',
    name: 'Juan',
  },
  {
    key: '2',
    name: 'Valeria',
  },
  {
    key: '3',
    name: 'Max',
  },
  {
    key: '4',
    name: 'Alfonso',
  },
];
const ListsKeys = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });
  const renderData = () => {
    if (isLoading) {
      return <h2>Is loading...</h2>;
    }
    return jsonData?.map((value) => {
      return (
        <div key={value.key}>
          <p>{value.name}</p>
        </div>
      );
    });
  };
  return <div>{renderData()}</div>;
};

export default ListsKeys;
