// SubjectCard.jsx
import React, { useState } from 'react';
import AddTaskModal from './AddTaskModal';
import { rankTitlesMap } from './data';

export default function SubjectCard({ subject, data, onAddTask }) {
  const [showModal, setShowModal] = useState(false);

  const rankTitles = rankTitlesMap[subject.id];

  return (
    <div className="bg-white text-black p-4 rounded-2xl shadow-lg relative">
      <h2 className="text-xl font-bold text-red-600">{subject.name}</h2>
      <p className="mb-2">Rank: <span className="font-semibold">{rankTitles[data.rank]}</span> (XP: {data.xp})</p>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div
          className="bg-red-500 h-4 rounded-full transition-all duration-500"
          style={{ width: `${Math.min(data.xp, 75) / 75 * 100}%` }}
        ></div>
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="bg-yellow-400 text-black px-3 py-1 rounded-xl font-bold"
      >
        + Add Task
      </button>

      <div className="mt-4">
        <h3 className="font-semibold">Tasks:</h3>
        <ul className="list-disc ml-5 text-sm">
          {data.tasks.map((task, idx) => (
            <li key={idx}>{task.title} (+{task.xp} XP)</li>
          ))}
        </ul>
      </div>

      {showModal && (
        <AddTaskModal
          subject={subject}
          onClose={() => setShowModal(false)}
          onSave={task => {
            onAddTask(subject.id, task);
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}
