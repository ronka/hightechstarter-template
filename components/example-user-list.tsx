"use client";

import { useUsers, useCreateUser } from "@/hooks/use-users";

const ExampleUserList = () => {
  const { data: users, isLoading, error, refetch } = useUsers();

  const createUserMutation = useCreateUser();

  const handleCreateUser = () => {
    createUserMutation.mutate({
      name: "John Doe",
      email: "john@example.com",
    });
  };

  if (isLoading) {
    return <div className="p-4">Loading users...</div>;
  }

  if (error) {
    return (
      <div className="p-4 text-red-600">
        Error: {error instanceof Error ? error.message : "Unknown error"}
        <button
          onClick={() => refetch()}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Users</h2>

      <button
        onClick={handleCreateUser}
        disabled={createUserMutation.isPending}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
      >
        {createUserMutation.isPending ? "Creating..." : "Create User"}
      </button>

      <ul className="space-y-2">
        {users?.map((user) => (
          <li key={user.id} className="p-3 border rounded-lg hover:bg-gray-50">
            <div className="font-medium">{user.name}</div>
            <div className="text-sm text-gray-600">{user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleUserList;
