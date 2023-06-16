import React from "react";

import { TaskForm, TaskList } from "@/components";
// import { useSelector } from "react-redux";
// import { AppStore } from "@/redux";

export type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  // const tasksState = useSelector<AppStore>((state) => state.tasks);
  // console.log(tasksState);
  
  return (
    <>
      <div>Home</div>
      <TaskForm />
      <TaskList />
    </>
  );
};

export default Home;
