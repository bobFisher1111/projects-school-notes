import React from 'react';

const JavaScriptTutorial: React.FC<Props> = ({
one}) => {
    console.log('about...');
    return (
        <div>
          <h1>JavaScript Tutorial</h1>
        </div>
    );
}
export type Props = {
  one: string;
};

export default JavaScriptTutorial;