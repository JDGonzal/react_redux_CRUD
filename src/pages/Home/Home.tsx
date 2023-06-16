import React from "react";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux";
import { TaskForm, TaskList } from "@/components";

export type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const tasksState = useSelector<AppStore>((state) => state.tasks);
  console.log(tasksState);

  return (
    <>
      <div>Home</div>
      <TaskForm />
      <TaskList />
    </>
  );
};

export default Home;
