import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// User types
export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserData {
  name: string;
  email: string;
}

export interface UpdateUserData {
  name?: string;
  email?: string;
}

// API functions
const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("/api/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};

const fetchUser = async (id: string): Promise<User> => {
  const response = await fetch(`/api/users/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }
  return response.json();
};

const createUser = async (userData: CreateUserData): Promise<User> => {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error("Failed to create user");
  }
  return response.json();
};

const updateUser = async ({
  id,
  ...userData
}: { id: string } & UpdateUserData): Promise<User> => {
  const response = await fetch(`/api/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error("Failed to update user");
  }
  return response.json();
};

const deleteUser = async (id: string): Promise<void> => {
  const response = await fetch(`/api/users/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete user");
  }
};

// Query keys
export const userKeys = {
  all: ["users"] as const,
  lists: () => [...userKeys.all, "list"] as const,
  list: (filters: Record<string, any>) =>
    [...userKeys.lists(), filters] as const,
  details: () => [...userKeys.all, "detail"] as const,
  detail: (id: string) => [...userKeys.details(), id] as const,
};

// Custom hooks
export const useUsers = (filters?: Record<string, any>) => {
  return useQuery({
    queryKey: userKeys.list(filters || {}),
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useUser = (id: string) => {
  return useQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => fetchUser(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: (newUser) => {
      // Invalidate and refetch users list
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });

      // Add the new user to the cache
      queryClient.setQueryData(userKeys.detail(newUser.id), newUser);
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUser,
    onSuccess: (updatedUser) => {
      // Update the user in the cache
      queryClient.setQueryData(userKeys.detail(updatedUser.id), updatedUser);

      // Invalidate users list to reflect changes
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: (_, deletedUserId) => {
      // Remove the user from the cache
      queryClient.removeQueries({ queryKey: userKeys.detail(deletedUserId) });

      // Invalidate users list to reflect changes
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });
    },
  });
};
