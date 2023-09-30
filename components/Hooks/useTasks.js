import { useState } from 'react';
import usePoints from './usePoints';

global.tasks = ["Pick up garbage at a park", "Jogged at 1 park", "Talk with chatbot", "Do daily quiz"];
global.taskAmounts = [2, 1, 1, 1];

const useTasks = () => {
  const { localPoints, addPoint } = usePoints();

  const decreaseAmount = (index) => {
    const newAmounts = [...global.taskAmounts];
    const newTasks = [...global.tasks];

    if (newAmounts[index] >= 1) {
      newAmounts[index] -= 1;
    }

    global.taskAmounts = newAmounts;
    global.tasks = newTasks;
    addPoint(); // Call the addPoint function passed as an argument
  };

  return { tasks: global.tasks, taskAmounts: global.taskAmounts, decreaseAmount };
};

export default useTasks;

