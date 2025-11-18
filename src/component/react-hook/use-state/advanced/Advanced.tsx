import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { TerminalUI } from "../../../ui/TerminalUI";

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export const AdvancedExample = () => {
  // 7. Array of Objects (Todo List)
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, text: "Learn useState", completed: true },
    { id: 2, text: "Build a project", completed: false },
    { id: 3, text: "Master React Hooks", completed: false },
  ]);
  const [todoInput, setTodoInput] = useState("");

  // 8. Functional Updates (Prevent Stale State)
  const [counter, setCounter] = useState(0);

  // Todo handlers
  const handleAddTodo = () => {
    if (todoInput.trim()) {
      const newTodo: TodoItem = {
        id: Date.now(),
        text: todoInput,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTodoInput("");
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Functional update examples
  const handleFunctionalIncrement = () => {
    // Wrong way - may use stale state
    // setCounter(counter + 1);

    // Right way - always uses latest state
    setCounter((prev) => prev + 1);
  };

  const handleMultipleUpdates = () => {
    // This will only increment by 1 (stale state)
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // This will increment by 3 (functional updates)
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  };
  return (
    <Card className="mb-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-4">
        🚀 Advanced Examples
      </h2>

      {/* 7. Todo List */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-3">
          7️⃣ Array of Objects (Todo List)
        </h3>
        <div className="flex gap-2 mb-4">
          <InputText
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            placeholder="Add new todo..."
            className="flex-1"
            onKeyPress={(e) => e.key === "Enter" && handleAddTodo()}
          />
          <Button
            label="Add Todo"
            icon="pi pi-plus"
            onClick={handleAddTodo}
            className="p-button-success"
          />
        </div>
        <div className="space-y-2 mb-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center gap-3 bg-white p-3 rounded border"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
                className="w-5 h-5 cursor-pointer"
              />
              <span
                className={`flex-1 ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {todo.text}
              </span>
              <Button
                icon="pi pi-trash"
                className="p-button-danger p-button-sm"
                onClick={() => handleDeleteTodo(todo.id)}
              />
            </div>
          ))}
        </div>
        <TerminalUI fileName="TodoList.tsx" name="Array of Objects">
          <pre className="text-sm leading-relaxed">
            <code>
              <span className="text-pink-400">const</span> [
              <span className="text-blue-300">todos</span>,{" "}
              <span className="text-blue-300">setTodos</span>] ={" "}
              <span className="text-yellow-300">useState</span>([...]);{"\n\n"}
              <span className="text-gray-500">{`// Add todo`}</span>
              {"\n"}
              <span className="text-blue-300">setTodos</span>([...
              <span className="text-blue-300">todos</span>,{" "}
              <span className="text-blue-300">newTodo</span>]);{"\n\n"}
              <span className="text-gray-500">{`// Toggle completed`}</span>
              {"\n"}
              <span className="text-blue-300">setTodos</span>(
              <span className="text-blue-300">todos</span>.
              <span className="text-yellow-300">map</span>(
              <span className="text-blue-300">todo</span> {`=> `}
              {"\n  "}
              <span className="text-blue-300">todo</span>.
              <span className="text-blue-300">id</span> ==={" "}
              <span className="text-blue-300">id</span> ? {"{ ..."}
              <span className="text-blue-300">todo</span>,{" "}
              <span className="text-blue-300">completed</span>: !
              <span className="text-blue-300">todo</span>.
              <span className="text-blue-300">completed</span> {"} : "}
              <span className="text-blue-300">todo</span>
              {"\n));"}
            </code>
          </pre>
        </TerminalUI>
      </div>

      {/* 8. Functional Updates */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-3">
          8️⃣ Functional Updates (Prevent Stale State)
        </h3>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-3xl font-bold text-purple-600 min-w-[60px] text-center">
            {counter}
          </span>
          <Button
            label="+1 (Functional)"
            onClick={handleFunctionalIncrement}
            className="p-button-info"
          />
          <Button
            label="+3 (Multiple Updates)"
            onClick={handleMultipleUpdates}
            className="p-button-success"
          />
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-4">
          <p className="text-sm text-yellow-800">
            <strong>⚠️ Important:</strong> Use functional updates when new state
            depends on previous state
          </p>
        </div>
        <TerminalUI fileName="FunctionalUpdate.tsx" name="Prevent Stale State">
          <pre className="text-sm leading-relaxed">
            <code>
              <span className="text-gray-500">{`// ❌ Wrong - may use stale state`}</span>
              {"\n"}
              <span className="text-blue-300">setCounter</span>(
              <span className="text-blue-300">counter</span> +{" "}
              <span className="text-orange-400">1</span>);{"\n\n"}
              <span className="text-gray-500">{`// ✅ Correct - always uses latest state`}</span>
              {"\n"}
              <span className="text-blue-300">setCounter</span>(
              <span className="text-blue-300">prev</span> {`=> `}
              <span className="text-blue-300">prev</span> +{" "}
              <span className="text-orange-400">1</span>);
            </code>
          </pre>
        </TerminalUI>
      </div>
    </Card>
  );
};
