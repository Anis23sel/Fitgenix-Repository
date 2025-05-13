import AdminPendingUsers from '@/components/ui/dashboard/AdminDashboard/AdminPendingUsers'
import EditSportsTime from '@/components/ui/dashboard/AdminDashboard/EditSportsTime'  
export default function AdminDashboard(){
    return (
        <>
            <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
            <p className="text-lg mb-8">Manage your application here.</p>
            <AdminPendingUsers />
            <EditSportsTime />
        </>
        
    );
}