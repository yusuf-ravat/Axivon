import { useQuery } from '@tanstack/react-query';

export function useCurrentUser() {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      return { id: '1', email: 'user@example.com', name: 'Demo User' };
    },
  });
}
