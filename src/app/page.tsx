import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";

import profile from "@/app/utils/profile-mock.json";
import posts from "@/app/utils/posts-mock.json";

export default function Home() {
  return (
    <main className="mt-8">
      <div className="flex flex-col justify-center items-center md:flex-row md:items-start max-w-screen-xl m-auto">
        <Sidebar profile={ profile }/>
        <Feed profile={ profile } posts={posts}/>
      </div>
    </main>
  )
}
