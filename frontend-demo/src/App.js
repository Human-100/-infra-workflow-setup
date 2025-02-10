import { useState, useEffect } from "react";

export default function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch("<your-backend-link>", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        });
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error("Error fetching message:", error);
        setMessage("Failed to fetch message");
      } finally {
        setLoading(false);
      }
    };
    
    fetchMessage();
  }, []);

  return (
    <div style={{
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      width: "100vw", 
      height: "100vh", 
      backgroundColor: "#f4f4f4",
      fontFamily: "Arial, sans-serif",
      overflow: "hidden"
    }}>
      <div style={{
        backgroundColor: "#ffffff",
        padding: "40px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        width: "80%",
        maxWidth: "600px"
      }}>
      <h1 style={{ color: "#de0500", marginBottom: "20px" }}>Leadgen</h1>
       <h2 style={{ color: "#333", marginBottom: "20px" }}>Main Branch</h2>
        <p style={{ fontSize: "20px", color: "#555" }}>{loading ? "Loading..." : message}</p>
      </div>
    </div>
  );
}
