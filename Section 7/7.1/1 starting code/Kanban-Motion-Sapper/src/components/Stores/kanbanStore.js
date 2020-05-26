import { writable } from 'svelte/store'

function kanban () {
  const { subscribe, set, update } = writable([])

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
    set: () => update(kb => kb),
    initialize: kb => set(kb)
  }
}

export const kanbanBoard = kanban()
