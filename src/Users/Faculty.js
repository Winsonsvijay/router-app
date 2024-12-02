import React from 'react';
import { Link } from 'react-router-dom';

export default function Faculty() {
  return (
    <div>
      <h1>Welcome to Faculty Page</h1>
      <button>
        <Link to="/users"> Back  </Link>

      </button>
    </div>
  )
}
