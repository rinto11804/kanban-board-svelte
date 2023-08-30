import { todos } from "./store";

export function createId() {
  return `id_${Math.floor(Math.random() * 1000)}`;
}

// i have currentEnterColumnName => columnID
export function getColumnID(columnName) {
  switch (columnName) {
    case "💡 To do":
      return "1";
    case "⏳ In progress":
      return "2";
    case "✅ Done":
      return "3";
  }
}
const newCard = {

  column_id: "3",
  id: createId(),
  title: "Idea 1",
  content: "Take a tour to the blackhole",
  tag: "Space",
}
/**
 * @param {string} column_id
 * @param {string} cardId
 */
export function moveCard(column_id, cardId) {
  todos.update((cards) => cards = change(cards, column_id, cardId));
}


function change(cards, column_id, cardId) {
  let newCards = cards.map((card, i) => {
    if (card.id == cardId) {
      card.column_id = column_id;
      console.log(card)
    }
  });
  return newCards;
}
