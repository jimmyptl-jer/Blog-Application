const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

export const register = async (data) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
    method: 'POST',
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  const responseBody = await response.json()

  if (!response.ok) {
    throw new Error(responseBody.message)
  }
}

export const login = async (data) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  const responseBody = await response.json()

  if (!response.ok) {
    throw new Error(responseBody.message)
  }
}
export const contact = async (data) => {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  const responseBody = await response.json()

  if (!response.ok) {
    throw new Error(responseBody.message)
  }
}

export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: "include"
  })


  if (!response.ok) {
    throw new Error("Token Invalid")
  }

  return response.json()
}

// apiClient.js

export const fetchCurrentUser = async () => {
  const response = await fetch(`${API_BASE_URL}/api/user/currentUser`, {
    credentials: 'include'
  })

  if (!response) {
    throw new Error('Failed to get current user')
  }

  return response.json()
}

export const signOut = async () => {
  const response = await fetch(`${API_BASE_URL}/api/user/logout`, {
    credentials: 'include',
    method: 'POST'
  })

  if (!response.ok) {
    throw new Error('Error during sign out')
  }
}


export const addPost = async (data) => {
  const response = await fetch(`${API_BASE_URL}/api/post/create`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (!response) {
    throw new Error('Failed to add post')
  }

  return response.json()
}

export const addProject = async (data) => {
  const response = await fetch(`${API_BASE_URL}/api/project/createProject`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (!response) {
    throw new Error('Failed to add post')
  }

  return response.json()
}

export const fetchProjects = async () => {
  const response = await fetch(`${API_BASE_URL}/api/project/getProjects`)

  if (!response) {
    throw new Error('Failed to get projects')
  }
  return response.json()
}
