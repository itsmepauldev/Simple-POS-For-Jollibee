let Price;
let All = [];
let total = 0;
let add, Remove, Update;
Price = (number) => {
  const price = {
    1: { name: "1pc. Chickenjoy Solo", price: 82 },
    2: { name: "1pc Chickenjoy Jolly Spaghetti", price: 132 },
    3: { name: "2pc Chickenjoy Solo", price: 163 },
    4: { name: "8Pc Chickenjoy Bucket", price: 549 },
    5: { name: "Chocolate sundae twirl", price: 50 },
  };
  const Select = price[number];
  All.push({ price: Select.price, name: Select.name });
  add(Select.price);
  Update();
};
add = (item) => {
  total += item;
  return total;
};

Remove = (index) => {
  total -= All[index].price;
  All.splice(index, 1);
  Update();
};

Update = () => {
  document.getElementById("div").innerHTML = `
      <table class="min-w-full border-collapse border border-gray-200 mt-10">
        <thead>
          <tr>
            <th class="border border-gray-200 px-4 py-2">Order #</th>
            <th class="border border-gray-200 px-4 py-2">Item Name</th>
            <th class="border border-gray-200 px-4 py-2">Price</th>
            <th class="border border-gray-200 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          ${All.map(
            (item, index) => `
            <tr>
              <td class="border border-gray-200 px-4 py-2 text-center">${
                index + 1
              }</td>
              <td class="border border-gray-200 px-4 py-2">${item.name}</td>
              <td class="border border-gray-200 px-4 py-2 text-center">$${
                item.price
              }</td>
              <td class="border border-gray-200 px-4 py-2 text-center">
                <button class="bg-red-600 font-semibold text-white p-1 rounded-md hover:bg-red-500" onclick="Remove(${index})">Remove</button>
              </td>
            </tr>
          `
          ).join("")}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="border border-gray-200 px-4 py-2 text-right font-medium">Total:</td>
            <td colspan="2" class="border border-gray-200 px-4 py-2 text-center">₱${total}</td>
          </tr>
        </tfoot>
      </table>`;
};
