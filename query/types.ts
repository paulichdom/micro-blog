export interface Post {
  id: string;
  title: string;
  comments: Comment[];
}

export type ModerationStatus = 'pending' | 'approved' | 'rejected';

export interface Comment {
  id: string;
  content: string;
  status: ModerationStatus;
}

export type EventType =
  | 'PostCreated'
  | 'CommentCreated'
  | 'CommentModerated'
  | 'CommentUpdated';

export interface Event {
  type: EventType;
  data: {
    id: string;
    title?: string;
    content?: string;
    status?: ModerationStatus;
    postId?: string;
  };
}
