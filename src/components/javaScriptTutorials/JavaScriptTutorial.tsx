import React from 'react';
import DataTable from '../projects/DataTable';

const JavaScriptTutorial: React.FC<Props> = ({
one}) => {
    console.log('about...');
    return (
        <div>
          <h1>JavaScript Tutorial</h1>
          <DataTable one={'1'} />
        </div>
    );
}
export type Props = {
  one: string;
};

export default JavaScriptTutorial;