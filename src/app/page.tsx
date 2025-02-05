import { Search } from "./_components/Inputs";
import { DoneList, TodoList } from "./_components/List";

export default function Home() {
  return (
    <div>
      <Search />
      <div>
        <TodoList />
        <DoneList />
      </div>
    </div>
  );
}
