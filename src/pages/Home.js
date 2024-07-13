import React, { useState } from 'react';
import { FaChevronDown, FaTimes } from 'react-icons/fa';

// Dummy image URLs for symptoms
// Dummy image URLs for symptoms
const symptomData = [
    { "id": 1, "name": "Fever", "imageUrl": "https://media.istockphoto.com/id/612409562/photo/sick-child-with-high-fever.webp?b=1&s=170667a&w=0&k=20&c=4a75KCCtTvOZ7e4rLfVCAEP_S3kd1zjyENj5m7UHHqI=", "description": "Elevated body temperature often accompanied by chills or sweating." },
    { "id": 2, "name": "Cough", "imageUrl": "https://images.unsplash.com/photo-1634128221567-3220e071d1ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y291Z2h8ZW58MHx8MHx8fDA%3D", "description": "Expelling air from the lungs with a sudden sharp sound." },
    { "id": 3, "name": "Headache", "imageUrl": "https://plus.unsplash.com/premium_photo-1664299995445-5670ef92fff6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZGFjaGV8ZW58MHx8MHx8fDA%3D", "description": "Pain in the head, often around the forehead or temples." },
    { "id": 4, "name": "Fatigue", "imageUrl": "https://plus.unsplash.com/premium_photo-1665203627191-49b3fde12d98?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhdGlndWV8ZW58MHx8MHx8fDA%3D", "description": "Feeling of tiredness or exhaustion, often without physical exertion." },
    { "id": 5, "name": "Headache", "imageUrl": "https://plus.unsplash.com/premium_photo-1664299995445-5670ef92fff6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZGFjaGV8ZW58MHx8MHx8fDA%3D", "description": "Pain in the head, often around the forehead or temples." },
    { "id": 6, "name": "Fatigue", "imageUrl": "https://plus.unsplash.com/premium_photo-1665203627191-49b3fde12d98?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhdGlndWV8ZW58MHx8MHx8fDA%3D", "description": "Feeling of tiredness or exhaustion, often without physical exertion." },
    // Add more symptoms as needed
    // Add more symptoms as needed
  ];

const doctorsData = [
  { id: 1, name: 'Dr. John Doe', availability: '9:00 AM - 5:00 PM' },
  { id: 2, name: 'Dr. Jane Smith', availability: '10:00 AM - 6:00 PM' },
  { id: 3, name: 'Dr. Michael Brown', availability: '8:00 AM - 4:00 PM' },
];

const Home = () => {
  const [selectedSymptom, setSelectedSymptom] = useState(null);

  const handleSymptomClick = (symptomId) => {
    setSelectedSymptom(selectedSymptom === symptomId ? null : symptomId);
  };


  const username = JSON.parse(localStorage.getItem('shukri'))?.username;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome, {username}</h1>
      <h1 className='ml-4'>Choose Your Disability</h1>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
        {symptomData.map(symptom => (
          <div key={symptom.id} className="bg-white rounded-lg shadow-md p-4 relative">
            <div className="flex items-center mb-2 relative">
              <img src={symptom.imageUrl} alt={symptom.name} className="w-full h-40 object-cover rounded-lg" />
              <FaChevronDown 
                className="absolute top-2 left-2 text-gray-600 text-2xl cursor-pointer"
                onClick={() => handleSymptomClick(symptom.id)}
              />
            </div>
            <div className="mt-2">
              <h2 className="text-xl font-bold">{symptom.name}</h2>
              <p className="text-gray-600">{symptom.description}</p>
            </div>
            {selectedSymptom === symptom.id && (
              <div className="absolute top-0 left-0 right-0 z-10 bg-white bg-opacity-90 p-4 rounded-lg flex flex-col justify-center items-center w-4/5 mx-auto mt-4 shadow-lg">
                <button className="absolute top-2 right-2 text-gray-700 text-xl" onClick={() => setSelectedSymptom(null)}>
                  <FaTimes />
                </button>
                <h3 className="text-lg font-semibold mb-2">Available Doctors</h3>
                <ul className="w-full">
                  {doctorsData.map(doctor => (
                    <li key={doctor.id} className="bg-gray-100 p-2 rounded mb-2 shadow">
                      <p className="text-gray-800 font-semibold">{doctor.name}</p>
                      <p className="text-gray-600">{doctor.availability}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
