import { useState } from "react";
import ProductCard from "./components/ProductCard";
import UserDashboard from "./components/userDashboard";

function App() {
  const [usersList, setUsersList] = useState([
    { id: 1, username: "santhu", role: "junior developer" },
    { id: 2, username: "sai", role: "junior developer" },
    { id: 3, username: "Anadh", role: "junior developer" },
  ]);
  const handlePromote = (id) => {
    const updatedUsers = usersList.map((user) =>
      user.id === id ? { ...user, role: "Senior Developer" } : user,
    );
    setUsersList(updatedUsers);
  };

  return (
    <>
      <div className="flex flex-wrap gap-6 p-6">
        {usersList.map((user) => (
          <UserDashboard
            key={user.id}
            username={user.username}
            role={user.role}
            onPromote={() => handlePromote(user.id)}
          />
        ))}
      </div>

      {/* <ProductCard productname="Wireless Headphones" 
      price={99}
      addToCart={(name) => console.log(`product ${name} is added to cart`)}
      productDescription="good for noise cancellation"   
      />

      <ProductCard productname="smart watch" 
      price={99}
      addToCart={(name) => console.log(`product ${name} is added to cart`)}
      productDescription="A stylish smart watch with fitness tracking, heart rate monitor, sleep tracking, and smart notifications for daily convenience."/>

      <ProductCard productname="mobile phone" 
      price={99}
      addToCart={(name) => console.log(`product ${name} is added to cart`)}
      productDescription="A high-performance smartphone with vibrant display, powerful processor, long battery life, and advanced camera features for everyday use."/> */}
    </>
  );
}

export default App;
