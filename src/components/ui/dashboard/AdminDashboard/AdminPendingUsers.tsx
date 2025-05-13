'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

type Adherent = {
  id_adherent: number
  nom: string
  prenom: string
  email: string
  age: number
}

export default function AdminPendingUsers() {
  const [users, setUsers] = useState<Adherent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPendingUsers()
  }, [])

  const fetchPendingUsers = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('Adherent')
      .select('id_adherent, nom, prenom, email, age')
      .eq('inscription_status', 'false')

    if (error) {
      console.error('Error fetching users:', error.message)
    } else {
      setUsers(data || [])
    }
    setLoading(false)
  }

  const approveUser = async (id: number) => {
    const { error } = await supabase
      .from('Adherent')
      .update({ inscription_status: 'true' })
      .eq('id_adherent', id)

    if (error) {
      console.error('Error approving user:', error.message)
    } else {
      setUsers(prev => prev.filter(user => user.id_adherent !== id))
    }
  }

  if (loading) return <p className="text-center mt-4">Loading...</p>
  if (users.length === 0) return <p className="text-center mt-4">No pending users.</p>

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Pending User Approvals</h2>
      <table className="w-full text-left border border-gray-300 rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Age</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id_adherent} className="hover:bg-gray-50">
              <td className="p-2 border">{user.id_adherent}</td>
              <td className="p-2 border">{user.nom} {user.prenom}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.age}</td>
              <td className="p-2 border">
                <button
                  onClick={() => approveUser(user.id_adherent)}
                  className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-black hover:text-white"
                >
                  Approve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
