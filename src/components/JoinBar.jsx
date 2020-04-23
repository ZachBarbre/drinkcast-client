import React, { useState } from 'react';
import { get, API_URL } from '../utils/apiConn';

const IndexPage = () => {
  const [joinBar, setJoinBar] = useState('');
  const [password, setPassword] = useState('');

  const submitJoinBar = (e) => {
    e.preventDefault();
    const data = { joinBar, password };
    const getUrl = `${API_URL}api/joinbar`;
    const response = get(getUrl, data);
    console.log(response);
    setJoinBar('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={submitJoinBar}>
        <input
          name="joinBar"
          type="text"
          value={joinBar}
          placeholder="Enter a Bar to Join"
          onChange={(e) => setJoinBar(e.target.value)}
        />
        <input
          name="password"
          type="password"
          value={password}
          placeholder="Enter a Bar to Join"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Join a Bar</button>
      </form>
    </div>
  );
};

export default IndexPage;