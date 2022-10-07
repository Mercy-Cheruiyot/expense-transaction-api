import React from "react";

function TransactionList(){

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Investment");
  const [amount, setAmount]=useState("")

  useEffect(() => {
    fetch("http://localhost:4000/transactions")
      .then((r) => r.json())
      .then((transactions) => setTransactions(transactions));
  }, []);

  function handleUpdateItem(updatedItem) {
    console.log("In ShoppingCart:", updatedItem);
  }
  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }
  function handleUpdateItem(updatedItem) {
    const updatedItems = items.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      } else {
        return item;
      }
    });
    setItems(updatedItems);
  }
  function handleDeleteItem(deletedItem) {
    const updatedItems = items.filter((item) => item.id !== deletedItem.id);
    setItems(updatedItems);
  }
  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    
      <div className="ShoppingList">
        <ItemForm onAddItem={handleAddItem} />
        <Filter
          category={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <ul className="Items">
          {/* pass it as a prop to Item */}
          {itemsToDisplay.map((item) => (
            <Item
              key={item.id}
              item={item}
              onUpdateItem={handleUpdateItem}
              onDeleteItem={handleDeleteItem}
            />
          ))}
        </ul>
      </div>
    );
  }

export default TransactionList;
