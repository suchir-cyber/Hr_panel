import { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import { generateMockDepartment, generateMockRating } from '../utils/mockUtils';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await fetch('https://dummyjson.com/users?limit=20');
      const data = await res.json();
      const enrichedUsers = data.users.map(user => ({
        ...user,
        department: generateMockDepartment(),
        rating: generateMockRating(),
      }));
      setUsers(enrichedUsers);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Employee Dashboard</h1>
      {loading ? (
        <p className="text-center">Loading users...</p>
      ) : (
        <div className="row">
          {users.map(user => (
            <div className="col-md-4 mb-4" key={user.id}>
              <UserCard user={user} onView={(id) => navigate(`/employee/${id}`)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}