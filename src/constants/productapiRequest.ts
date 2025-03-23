export async function productapiRequest( endpoint:string, method:string = "GET", values = {}) {
    try {   
        const response = await fetch(endpoint, {
            method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer YOUR_ACCESS_TOKEN_HERE`
            },
            body: method !== "GET" ? JSON.stringify(values) : null,
        });

        const data = await response.json();
        // console.log("Parsed JSON Data:", data);

        if (!response.ok) {
            throw new Error(data.message || "Something went wrong");
        }

        return { success: true, message: data.message, data: data?.data || null };
    } catch (error) {
        return { success: false, message: error instanceof Error ? error.message : "An error occurred" };
    }
}