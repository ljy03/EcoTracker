import { useState } from 'react';
import usePoints from './usePoints';

global.tasks = ["Pick up 5 pieces of litter", "Plant a tree", "Don't eat a meal with meat", "Read about environmental issues"];
global.taskAmounts = [5, 2, 5, 10];

const useTasks = () => {
  const { localPoints, addPoint } = usePoints();

  const decreaseAmount = (index) => {
    const newAmounts = [...global.taskAmounts];
    const newTasks = [...global.tasks];

    if (newAmounts[index] > 1) {
      newAmounts[index] -= 1;
    } else {
      newAmounts.splice(index, 1);
      newTasks.splice(index, 1);
    }

    global.taskAmounts = newAmounts;
    global.tasks = newTasks;
    addPoint(); // Call the addPoint function passed as an argument
  };

  return { tasks: global.tasks, taskAmounts: global.taskAmounts, decreaseAmount };
};

export default useTasks;

