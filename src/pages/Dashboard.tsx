import React from 'react';

const Dashboard: React.FC<Props> = ({
one,
}) => {
    console.log('home...');
    return (
        <div>
          <h1>Dashboard</h1>
        </div>
    );
}

export type Props = {
  one: string;
};

export default Dashboard;