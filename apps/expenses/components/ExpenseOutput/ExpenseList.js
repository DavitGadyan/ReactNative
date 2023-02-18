import { FlatList } from "react-native";
import { Text } from "react-native";

function renderExpenseItem(itemData) {
  return <Text>{itemData.item.description}</Text>;
}

function ExpenseList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpenseList;
