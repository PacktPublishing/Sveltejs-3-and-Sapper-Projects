import { writable } from 'svelte/store'

function kanban () {
  const { subscribe, update } = writable([
    {
      id: 0,
      name: 'To Do',
      tasks: [
        { id: 0, value: 'Task 2' },
        { id: 1, value: 'Task 3' }
      ]
    },
    {
      id: 1,
      name: 'Doing',
      tasks: [{ id: 2, value: 'Task 1' }]
    },
    {
      id: 2,
      name: 'Testing',
      tasks: []
    },
    {
      id: 3,
      name: 'Done',
      tasks: []
    }
  ])

  return {
    subscribe,
    addCard: (newCardId, name, newTaskId) =>
      update(kb => {
        kb.push({
          id: newCardId,
          name: name,
          tasks: [{ id: newTaskId, value: '' }]
        })
        return kb
      }),
    deleteCard: cardId =>
      update(kb => {
        kb = kb.filter(c => c.id !== cardId)
        return kb
      }),
    addTask: (cardInd, newTaskId, targetValue) =>
      update(kb => {
        kb[cardInd].tasks.push({ id: newTaskId, value: targetValue })
        return kb
      }),
    deleteTask: (cardIndex, taskID) =>
      update(kb => {
        kb[cardIndex].tasks = kb[cardIndex].tasks.filter(t => t.id !== taskID)
        return kb
      }),
    set: () => update(kb => kb)
  }
}

export const kanbanBoard = kanban()
