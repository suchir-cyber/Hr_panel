import { create } from 'zustand';

export const useBookmarksStore = create(set => ({
  bookmarks: [],
  addBookmark: (user) =>
    set(state => ({
      bookmarks: [...state.bookmarks, user].filter(
        (v, i, a) => a.findIndex(u => u.id === v.id) === i
      ),
    })),
  removeBookmark: (id) =>
    set(state => ({
      bookmarks: state.bookmarks.filter(u => u.id !== id),
    })),
}));