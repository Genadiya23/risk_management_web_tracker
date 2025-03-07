export default async function useFetch() {
    const authenticatedFetch = async (endpoint, options = {}) => {
      return fetch(`/api/proxy?endpoint=${encodeURIComponent(endpoint)}`, {
        method: options.method || "GET",
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        body: options.body ? JSON.stringify(options.body) : null,
      }).then((res) => res.json())
    }
  
    return authenticatedFetch
}
  