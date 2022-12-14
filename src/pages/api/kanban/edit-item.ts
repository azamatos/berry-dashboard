import { NextApiRequest, NextApiResponse } from 'next';
import { KanbanColumn, KanbanItem, KanbanUserStory } from 'types/kanban';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { items, item, userStory, storyId, columns, columnId } = req.body;
  items.splice(
    items.findIndex((i: KanbanItem) => i.id === item.id),
    1,
    item
  );

  let newUserStory = userStory;
  if (storyId) {
    const currentStory = userStory.filter((story: KanbanUserStory) => story.itemIds.filter((itemId: string) => itemId === item.id)[0])[0];
    if (currentStory !== undefined && currentStory.id !== storyId) {
      newUserStory = userStory.map((story: KanbanUserStory) => {
        if (story.itemIds.filter((itemId: string) => itemId === item.id)[0]) {
          return {
            ...story,
            itemIds: story.itemIds.filter((itemId: string) => itemId !== item.id)
          };
        }
        if (story.id === storyId) {
          return {
            ...story,
            itemIds: story.itemIds ? [...story.itemIds, item.id] : [item.id]
          };
        }
        return story;
      });
    }

    if (currentStory === undefined) {
      newUserStory = userStory.map((story: KanbanUserStory) => {
        if (story.id === storyId) {
          return {
            ...story,
            itemIds: story.itemIds ? [...story.itemIds, item.id] : [item.id]
          };
        }
        return story;
      });
    }
  }

  let newColumn = columns;
  if (columnId) {
    const currentColumn = columns.filter((column: KanbanColumn) => column.itemIds.filter((itemId: string) => itemId === item.id)[0])[0];
    if (currentColumn !== undefined && currentColumn.id !== columnId) {
      newColumn = columns.map((column: KanbanColumn) => {
        if (column.itemIds.filter((itemId: string) => itemId === item.id)[0]) {
          return {
            ...column,
            itemIds: column.itemIds.filter((itemId: string) => itemId !== item.id)
          };
        }
        if (column.id === columnId) {
          return {
            ...column,
            itemIds: column.itemIds ? [...column.itemIds, item.id] : [item.id]
          };
        }
        return column;
      });
    }

    if (currentColumn === undefined) {
      newColumn = columns.map((column: KanbanColumn) => {
        if (column.id === columnId) {
          return {
            ...column,
            itemIds: column.itemIds ? [...column.itemIds, item.id] : [item.id]
          };
        }
        return column;
      });
    }
  }

  const result = {
    items,
    columns: newColumn,
    userStory: newUserStory
  };

  return res.status(200).json({ ...result });
}
