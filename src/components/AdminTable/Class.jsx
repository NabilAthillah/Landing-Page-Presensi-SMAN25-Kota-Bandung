import React from 'react'

const Class = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_BASE_URL}/data/get/class`
                );
                setClasses(response.data.classes);
            } catch (error) {
                console.error("Error fetching classes:", error);
            }
        };

        fetchClasses();
    }, []);
  return (
    <div>
      <h1 className="text-xl font-semibold text-gray-800 pb-4">Data Kelas</h1>
      <table className="min-w-full bg-white shadow-md rounded">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="py-2 px-4">ID Kelas</th>
            <th className="py-2 px-4">Nama Kelas</th>
            <th className="py-2 px-4">Deskripsi</th>
          </tr>
        </thead>
        <tbody>
          {classes.length > 0 ? (
            classes.map((classItem) => (
              <tr key={classItem.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4 text-center">{classItem.id}</td>
                <td className="py-2 px-4 text-center">{classItem.name}</td>
                <td className="py-2 px-4 text-center">{classItem.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="py-2 px-4 text-center">
                Tidak Ada Data Kelas
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Class