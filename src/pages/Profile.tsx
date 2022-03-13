import React from 'react';

const Profile: React.FC<Props> = ({
one}) => {
    console.log('home...');
    return (
        <div>
            <h1>Profile</h1>
        </div>
    );
}

export type Props = {
  one: string;
};

export default Profile;