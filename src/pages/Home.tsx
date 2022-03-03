import React from 'react';

const Home: React.FC<Props> = ({
one}) => {
    console.log('home...');
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

export type Props = {
  one: string;
};

export default Home;