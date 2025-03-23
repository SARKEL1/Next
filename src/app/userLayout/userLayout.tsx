import Link from 'next/link';
import '../styles/globals.css';

const UserLayout = ({ children, activePage }: { children: React.ReactNode, activePage: string }) => {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '200px', padding: '20px', background: '#2d2d2d' }}>
        <ul>
          <li><Link href="/profile" className={activePage === 'profile' ? 'active' : ''}>Profil użytkownika</Link></li>
          <li><Link href="/settings" className={activePage === 'settings' ? 'active' : ''}>Ustawienia konta</Link></li>
          <li><Link href="/user/orders" className={activePage === 'orders' ? 'active' : ''}>Zamówienia</Link></li>
        </ul>
      </aside>
      <div style={{ marginLeft: '220px', padding: '20px', flex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default UserLayout;
