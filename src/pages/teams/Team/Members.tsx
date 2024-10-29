import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface MembersProps {
  members: any[];
}

export const Members: FC<MembersProps> = ({ members }) => {
  return ( 
    <div className='members'>
      {members.map((member, index) => (
        <Link to={`/users/${member.user_id}`} className='member' key={index}>
          <img src={member.photo} />
          <span>{member.username}</span>
        </Link>
      ))}
    </div>
  );
};
