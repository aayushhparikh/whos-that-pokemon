export const getPokemonOfTheDay = async () => { 
    const API_URL = import.meta.env.VITE_API_URL;

    if (!API_URL) {
        console.error("API URL is not defined in the environment variables.");
        return null;
    }

    try {
        const response = await fetch(
            `${API_URL}/pokemon-of-the-day`,
            {
              method: "GET",
              headers: {
                'Content-Type': 'application/json',
              },
            },
          );
      
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          return await response.json();
        } catch (error) {
          console.error("Error fetching Pokemon:", error);
          return null;
        }
    };