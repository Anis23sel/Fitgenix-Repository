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
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  useEffect(() => {
    fetchPendingUsers()
  }, [])

  const fetchPendingUsers = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('Adherent')
      .select('id_adherent, nom, prenom, email, age')
      .eq('inscription_status', 'pending')

    if (error) {
      console.error('Error fetching users:', error.message)
    } else {
      setUsers(data || [])
    }
    setLoading(false)
  }

  const updateUserStatus = async (id: number, status: 'true' | 'false') => {
    const { error } = await supabase
      .from('Adherent')
      .update({ inscription_status: status })
      .eq('id_adherent', id)

    if (error) {
      console.error('Error updating user:', error.message)
    } else {
      setUsers(prev => prev.filter(user => user.id_adherent !== id))
    }
  }

  const totalPages = Math.ceil(users.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedUsers = users.slice(startIndex, startIndex + itemsPerPage)

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
          {paginatedUsers.map(user => (
            <tr key={user.id_adherent} className="hover:bg-gray-50">
              <td className="p-2 border">{user.id_adherent}</td>
              <td className="p-2 border">{user.nom} {user.prenom}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.age}</td>
              <td className="p-2 border space-x-2">
                <button
                  onClick={() => updateUserStatus(user.id_adherent, 'true')}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Approve
                </button>
                <button
                  onClick={() => updateUserStatus(user.id_adherent, 'false')}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Decline
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          ← Prev
        </button>
        <span className="text-sm">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next →
        </button>
      </div>
    </div>
  )
}
