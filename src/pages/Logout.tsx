import React from 'react';

const Logout: React.FC<Props> = ({
one}) => {
    console.log('home...');
    return (
        <div>
            <h1>Logout</h1>
        </div>
    );
}

export type Props = {
  one: string;
};

export default Logout;