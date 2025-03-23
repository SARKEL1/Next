'use client';

import { useRouter } from 'next/navigation';
import { users } from '../../utils/users';
import UserLayout from '../../userLayout/userLayout';

const ProfilePage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const userId = parseInt(params.id);
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return <h1>Użytkownik nie istnieje</h1>;
  }

  const searchParams = new URLSearchParams(router.query as any);
  const detailId = parseInt(searchParams.get('id') || '');

  const detail = detailId ? user.details.find(d => d.id === detailId) : null;

  return (
    <UserLayout activePage="profile">
      <h1>Profil użytkownika {user.name}</h1>
      <p>Email: {user.email}</p>
      {detail ? (
        <>
          <h2>{detail.title}</h2>
          <p>{detail.description}</p>
        </>
      ) : (
        <div>
          <h2>Details</h2>
          <ul>
            {user.details.map((detail) => (
              <li key={detail.id}>
                <h3>{detail.title}</h3>
                <p>{detail.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {detailId && !detail && <p>Nie znaleziono elementu o podanym id</p>}
    </UserLayout>
  );
};

export default ProfilePage;
