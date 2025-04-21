export default function AdminTable({ users, onEdit }) {
    return (
      <div className="p-4 rounded-xl shadow w-full" style={{ backgroundColor: '#F9F9F9F9' }}>
        <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Role</th>
              <th className="p-2">Edit</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.role}</td>
                <td className="p-2 text-blue-600 cursor-pointer" onClick={() => onEdit(user)}> Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  