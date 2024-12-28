import React from 'react';

function AdminLayout({ children }) {
  return (
    <div>
      <header>Admin Header</header>
      <aside>Sidebar</aside>
      <main>{children}</main>
    </div>
  );
}

export default AdminLayout;
