import React from 'react';
import { FaUserMd, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// Dummy data for doctors with added images
const doctorsData = [
  { id: 1, name: 'Dr. Faith Nyaboke', specialty: 'Cardiology', phone: '+254 123 456 789', email: 'john.doe@example.com', imageUrl: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RG9jdG9yfGVufDB8fDB8fHww' },
  { id: 2, name: 'Dr. Jane Kinyua', specialty: 'Pediatrics', phone: '+254 234 567 890', email: 'jane.smith@example.com', imageUrl: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RG9jdG9yfGVufDB8fDB8fHww' },
  { id: 3, name: 'Dr. Michael Kimemia', specialty: 'Orthopedics', phone: '+254 345 678 901', email: 'michael.brown@example.com', imageUrl: 'https://images.unsplash.com/photo-1609743522471-83c84ce23e32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fERvY3RvcnxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 4, name: 'Dr. Gary Kimani', specialty: 'Dermatology', phone: '+254 456 789 012', email: 'sarah.johnson@example.com', imageUrl: 'https://media.istockphoto.com/id/1486172842/photo/portrait-of-male-nurse-in-his-office.webp?b=1&s=170667a&w=0&k=20&c=X4TGvYkgE0Hqqdwv13z47msgfNAFLH9udGXPzWHlT9A=' },
  { id: 5, name: 'Dr. David ', specialty: 'Neurology', phone: '+254 567 890 123', email: 'david.lee@example.com', imageUrl: 'https://images.unsplash.com/photo-1579684453401-966b11832744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fERvY3RvcnxlbnwwfHwwfHx8MA%3D%3D' },
];

const Doctor = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold  mb-4">Available Doctors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {doctorsData.map(doctor => (
          <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={doctor.imageUrl} alt={doctor.name} className="w-full h-40 object-cover object-center" />
            <div className="p-4">
              <div className="flex items-center mb-4">
                <FaUserMd className="text-4xl text-blue-500 mr-2" />
                <div>
                  <h2 className="text-xl font-bold">{doctor.name}</h2>
                  <p className="text-gray-600">{doctor.specialty}</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <FaPhoneAlt className="text-xl text-gray-500 mr-2" />
                <span>{doctor.phone}</span>
              </div>
              <div className="flex items-center mb-2">
                <FaEnvelope className="text-xl text-gray-500 mr-2" />
                <span>{doctor.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctor;
