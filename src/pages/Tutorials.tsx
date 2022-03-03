import React from 'react';
import Button from '@mui/material/Button';
import JavaScriptTutorial from '../components/JavaScriptTutorials/JavaScriptTutorial';
import DataTutorials from '../components/DataTutorials/DataTutorials';


const Tutorials: React.FC<Props> = ({
one}) => {
    console.log('JavaScript Tutorial...');
    return (
        <div>
            <h1>Tutorials</h1>
            <Button 
              variant="text"
              onClick={() => <JavaScriptTutorial one={'turtle'} />}
            >
              <h1>JavaScript Tutorial</h1>
            </Button>
            
            <DataTutorials one={'turtle'} />
        </div>
    );
}

export type Props = {
  one: string;
};

export default Tutorials;