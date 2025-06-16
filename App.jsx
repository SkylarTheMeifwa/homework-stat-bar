// App.jsx
import React, { useState } from 'react';
import SubjectCard from './SubjectCard';
import { subjects, rankThresholdsMap } from './data';

export default function App() {
  const [subjectData, setSubjectData] = useState(
    subjects.reduce((acc, subj) => {
      acc[subj.id] = { xp: 0, tasks: [], rank: 1 };
      return acc;
    }, {})
  );

  const addXP = (id, task) => {
    setSubjectData(prev => {
      const subject = prev[id];
      const newXP = subject.xp + task.xp;
      const newRank = getRank(id, newXP);
      return {
        ...prev,
        [id]: {
          ...subject,
          xp: newXP,
          tasks: [...subject.tasks, task],
          rank: newRank,
        },
      };
    });
  };

  const resetWeek = () => {
    setSubjectData(subjects.reduce((acc, subj) => {
      acc[subj.id] = { xp: 0, tasks: [], rank: 1 };
      return acc;
    }, {}));
  };

  const getRank = (subjectId, xp) => {
    const thresholds = rankThresholdsMap[subjectId];
    for (let i = thresholds.length - 1; i >= 0; i--) {
      if (xp >= thresholds[i]) return i + 1;
    }
    return 1;
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold text-red-500 mb-4">Persona 5 Habit Tracker</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {subjects.map(subj => (
          <SubjectCard
            key={subj.id}
            subject={subj}
            data={subjectData[subj.id]}
            onAddTask={addXP}
          />
        ))}
      </div>
      <button
        onClick={resetWeek}
        className="mt-6 bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold"
      >
        Reset Week
      </button>
    </div>
  );
}
