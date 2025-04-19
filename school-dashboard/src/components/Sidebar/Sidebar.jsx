import { Home, CircleUserRound, Settings , LayoutDashboard, House} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside>
      <div className="w-40 text- text-3xl flex justify-center items-center p-6" style={{background : "#2749B3",color:"#fff"}}><House size={60} /></div>
      <div className="w-40 bg-slate-800 text-gray-100 min-h-screen p-2 ">
        <ul className="space-y-4 p-2 cursor-pointer " style={{minHeight: '200vh'}}>
            <li className="flex items-center gap-2 text-white"><LayoutDashboard size={20}/> Dashboard</li>
            <li className="flex items-center gap-2"><CircleUserRound size={20}/> Profile</li>
            <li className="flex items-center gap-2"><Settings size={20}/> Settings</li>
        </ul>
       <h2 className="flex gap-2 cursor-pointer" style={{position:"absolute",top:"145vh",fontSize:"18px"}}><CircleUserRound size={25} /> Admin</h2>
      </div>
    </aside>
  );
}
