import { NextApiRequest, NextApiResponse } from 'next';
import { KanbanUserStory } from 'types/kanban';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userStory, storyId, comment, comments } = req.body;
  const newUserStory = userStory.map((story: KanbanUserStory) => {
    if (story.id === storyId) {
      return {
        ...story,
        commentIds: story.commentIds ? [...story.commentIds, comment.id] : [comment.id]
      };
    }
    return story;
  });

  const result = {
    userStory: newUserStory,
    comments: [...comments, comment]
  };
  return res.status(200).json({ ...result });
}
