import { useState } from 'react';

interface ITodoItem {
  id: number;
  content?: string;
  status?: string;
  label?: string;
}

const initTodoList: ITodoItem[] = [];

export default function LocalPage() {
  const [todoList, setTodoList] = useState(initTodoList);

  // 新增任务
  const handleClick1 = () => {
    const newTodoList = [...todoList];

    const array = new Uint8Array(1);
    crypto.getRandomValues(array);

    newTodoList.push({
      id: array[0]
    })
    setTodoList(newTodoList)
  };

  // 删除任务
  const handleClick2 = () => { };

  return (
    <div>
      <div>离线列表</div>
      <ul>
        {
          todoList.map((item: ITodoItem) => {
            return (
              <li key={item.id}>
                <span>{item.label}</span>
                <input>{item.content}</input>
                <span onClick={handleClick2}>delete</span>
              </li>
            );
          })
        }
        <li>
        <span onClick={handleClick1}>add</span>
        </li>
      </ul>
    </div>
  );
}
