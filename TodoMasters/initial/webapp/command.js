import { TodoItem, TodoList } from "./classes.js";

class Command {
  name;
  args; // Array
  constructor(name, args) {
    this.name = name;
    this.args = args;
  }
}

const Commands = {
  ADD: "add",
  DELETE: "delete",
};

const CommandExecuter = {
  execute(command) {
    const todoList = TodoList.getInstance();
    switch (command.name) {
      case Commands.ADD:
        const todoInput = globalThis.DOMException.todoInput;
        const todoText = todoInput.value.trim();
        const itemInList = todoList.find(todoText);

        if (todoText != "" && itemInList == undefined) {
          todoInput.value = "";
          todoList.add(new TodoItem(todoText));
        }
        break;
      case Commands.DELETE:
        const [textToDelete] = command.args;
        todoList.delete(textToDelete);
        break;
    }
  },
};
