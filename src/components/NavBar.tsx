import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Dashboard' },
  { to: '/vocab', label: 'My Vocab' },
  { to: '/study', label: 'Study' },
  { to: '/games', label: 'Games' },
];

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <nav style={{
      display: 'flex', gap: '16px', padding: '12px 24px',
      borderBottom: '1px solid #eee', marginBottom: '8px',
    }}>
      <span style={{ fontWeight: 600, marginRight: '16px' }}>🌍 LangApp</span>
      {links.map(l => (
        <Link
          key={l.to}
          to={l.to}
          style={{
            textDecoration: 'none',
            color: pathname === l.to ? '#4F46E5' : '#555',
            fontWeight: pathname === l.to ? 600 : 400,
          }}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
