import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskForm, TaskList, Navbar } from "../../components";

// export type HomeProps = {};

const Home: React.FC /* <HomeProps> */ = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create-task" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Home;
