import React from 'react'

const Table = () => {
  return (
    <div className="overflow-x-auto">
        
    <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Mata Pelajaran</th>
        <th>Hari</th>
        <th>Jam</th>
        <th>Kelas</th>
        <th>Guru</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Matematika</td>
        <td>Quality Control Specialist</td>
        <td>12.00</td>
        <td>X IPA 100</td>
        <td>Jackie Chen</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>12.00</td>
        <td>X IPA 100</td>
        <td>Jackie Chen</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>12.00</td>
        <td>X IPA 100</td>
        <td>Jackie Chen</td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default Table