import React, { Component } from 'react';

export default ({contributors}) => {
  return <ul className="bubble-list">
    {contributors.map(c => <Contributor key={c.id} avatar={c.avatar_url} href={c.html_url} dimensions="100"/>)}
  </ul>
};

const Contributor = ({avatar, href, dimensions}) => {
  return (
    <li className="bubble">
      <img src={avatar} height={dimensions} width={dimensions}/>
    </li>
  );
};