// SubjectCard.jsx
import React, { useState, useEffect } from 'react';
import AddTaskModal from './AddTaskModal';
import { rankTitlesMap } from './data';
import useSound from 'use-sound';
import xpSmallSfx from './sounds/xp-small.mp3';
import xpMediumSfx from './sounds/xp-medium.mp3';
import xpLargeSfx from './sounds/xp-large.mp3';
import xpTotalSfx from './sounds/xp-total.mp3';
import rankUpSfx from './sounds/rank-up.mp3';
import RankUpAnimation from './RankUpAnimation';

export default function SubjectCard({ subject, data, onAddTask }) {
  const [showModal, setShowModal] = useState(false);
  const [prevXP, setPrevXP] = useState(data.xp);
  const [prevRank, setPrevRank] = useState(data.rank);
  const [showRankUpAnim, setShowRankUpAnim] = useState(false);

  const [playSmall] = useSound(xpSmallSfx);
  const [playMedium] = useSound(xpMediumSfx);
  const [playLarge] = useSound(xpLargeSfx);
  const [playTotal] = useSound(xpTotalSfx);
  const [playRankUp] = useSound(rankUpSfx);

  const rankTitles = rankTitlesMap[subject.id];

  useEffect(() => {
    const latestTask = data.tasks[data.tasks.length - 1];
    if (!latestTask) return;
    if (latestTask.xp >= 5) playLarge();
    else if (latestTask.xp >= 3) playMedium();
    else playSmall();
    playTotal();

    if (data.rank > prevRank) {
      playRankUp();
      setShowRankUpAnim(true);
      setTimeout(() => setShowRankUpAnim(false), 2000);
    }

    setPrevXP(data.xp);
    setPrevRank(data.rank);
  }, [data.xp]);

  return (
    <div className="bg-white text-black p-4 rounded-2xl shadow-lg relative overflow-hidden">
      {showRankUpAnim && <RankUpAnimation />}
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
