import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskForm, TaskList, Navbar } from "../../components";

// export type HomeProps = {};

const Home: React.FC /* <HomeProps> */ = () => {
  return (
    <div className="bg-zinc-200 h-screen text-blue-900">
      <BrowserRouter>
        <div className="flex items-center justify-center h-full">
          <div className="w-4/6">
          <Navbar />
            <Routes>
              <Route path="/" element={<TaskList />} />
              <Route path="/create-task" element={<TaskForm />} />
              <Route path="/update-task/:id" element={<TaskForm />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Home;
