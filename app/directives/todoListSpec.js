var expect = require('chai').expect;
import { TodoListController } from './todoList.js';

var todos = [
  { title: '1', isComplete: false },
  { title: '2', isComplete: true },
  { title: '3', isComplete: false },
  { title: '4', isComplete: false },
  { title: '5', isComplete: true },
  { title: '6', isComplete: true }
]

describe('todo list filters', function() {
  it('returns all todos', function() {
    var TLC = new TodoListController();
    var allTodos = todos.filter(TLC.filterFn.all);
    expect(allTodos).to.deep.equal(todos);
  });

  it('returns completed todos', function() {
    var TLC = new TodoListController();
    var completeTodos = todos.filter(TLC.filterFn.complete);
    expect(completeTodos).to.deep.equal([
      { title: '2', isComplete: true },
      { title: '5', isComplete: true },
      { title: '6', isComplete: true }
    ])
  });

  it('returns incomplete todos', function() {
    var TLC = new TodoListController();
    var incompleteTodos = todos.filter(TLC.filterFn.incomplete);
    expect(incompleteTodos).to.deep.equal([
      { title: '1', isComplete: false },
      { title: '3', isComplete: false },
      { title: '4', isComplete: false }
    ])
  });
});
