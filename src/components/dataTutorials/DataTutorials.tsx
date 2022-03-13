import React from 'react';

const DataTutorials: React.FC<Props> = ({
one}) => {
    console.log('data tutorials...');
    return (
        <div>
          <h1>Data Tutorial</h1>
        </div>
    );
}
export type Props = {
  one: string;
};

export default DataTutorials;