export default function DashboardCard({ title, value, sub }) {
    return (
      <div className=" p-4 rounded-xl shadow w-65" style={{ backgroundColor: '#F6F6F8' }}>
        <h3 className="text-sm text-gray-600 mb-5">{title}</h3>
        <div className="text-2xl font-bold ml-2">{value}</div>
        {sub && <p className="text-xs text-gray-500 mt-1">{sub}</p>}
      </div>
    );
  }