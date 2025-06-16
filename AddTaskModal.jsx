// AddTaskModal.jsx
import React, { useState } from 'react';

export default function AddTaskModal({ subject, onClose, onSave }) {
  const [title, setTitle] = useState('');
  const [xp, setXP] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || xp < 1) return;
    onSave({ title, xp });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 rounded-2xl w-11/12 max-w-md shadow-2xl">
        <h2 className="text-xl font-bold text-red-600 mb-4">Add Task - {subject.name}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Task Title</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Finished worksheet"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">XP Earned</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-lg p-2"
              value={xp}
              onChange={(e) => setXP(Number(e.target.value))}
              min="1"
              required
            />
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded-xl"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-400 text-black font-bold rounded-xl"
            >
              Save Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
