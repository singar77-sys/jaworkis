export interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

export const sandwiches: MenuItem[] = [
  // --- Premium ($13–$14) ---
  { name: "Pastrami Sandwich", price: "$14.00", description: "Pastrami on Rye with Swiss" },
  { name: "Reuben", price: "$14.00", description: "Corned Beef, Sauerkraut, Thousand Island on Rye" },
  { name: "The Stepandwich", price: "$13.00", description: "Pastrami, Corned Beef, Garlic Cheddar, Gnar Gnar Kraut, Montana Girl Mustard" },
  { name: "The Beast", price: "$13.00", description: "Kielbasa Loaf, Pastrami, Sopressata, Garlic Cheddar, Montana Girl Mustard, Chips" },
  { name: "The Big Chew", price: "$13.00", description: "Sopressata, Prosciutto, Pepperoni, Salami, Provolone, Bruschetta" },
  { name: "The Big Reubenski", price: "$13.00", description: "Roasted Pork, Sauerkraut, Garlic Cheddar, Garlic Sauce" },
  { name: "World Famous Homemade Roast Beef Sub", price: "$13.00", description: "With Horsey Sauce or Horseradish" },
  { name: "Almost World Famous Homemade Roast Pork Sandwich", price: "$13.00", description: "Coleslaw and Hot Sauce on Rye" },
  { name: "Corned Beef Sandwich", price: "$13.00", description: "Corned Beef on Rye with Swiss" },
  { name: "Freddie\u2019s Favorite", price: "$13.00", description: "Roast Pork, Kielbasa Loaf, Prasky, Garlic Cheddar, Jaws Special Sauce" },

  // --- Mid ($12) ---
  { name: "The Big John", price: "$12.00", description: "Turkey Breast, Prosciutto, Roasted Red Peppers, Provolone" },
  { name: "Turkey Reuben", price: "$12.00", description: "Turkey Breast, Sauerkraut, Thousand Island on Rye" },
  { name: "Tuna Salad Sub", price: "$12.00", description: "Lettuce and Tomato" },

  // --- Classic ($9) ---
  { name: "Jaws Club", price: "$9.00", description: "Ham, Turkey, Bacon, Swiss" },
  { name: "Hot Ham & Cheese Sub", price: "$9.00", description: "Baked or Applewood Ham with American" },
  { name: "Buffalo Chicken Breast Sub", price: "$9.00", description: "Buffalo Chicken Breast, Bacon, Swiss, Ranch" },
  { name: "Chicken Salad Sub", price: "$9.00", description: "Lettuce and Tomato" },
  { name: "Overstuffed Italian Sub", price: "$9.00", description: "Capicola, Hot Ham, Salami, Pepperoni, Provolone" },
  { name: "Overstuffed Polish Sub", price: "$9.00", description: "Polish Ham, Kielbasa Loaf, Prasky, Swiss" },
  { name: "Supreme Sub", price: "$9.00", description: "Ham, Pepperoni, Salami, Provolone" },
  { name: "Turkey Club", price: "$9.00", description: "Rotisserie, Honey Smoked, or Cajun" },

  // --- Signature ($8) ---
  { name: "Jaworski\u2019s Famous Homemade Sausage Sandwich", price: "$8.00", description: "Fresh Polish, Smoked Polish or Slovenian" },
];

/** Menu footnotes from the board */
export const menuNotes = {
  customization: "Customize your order by choosing different bread, meat or cheese",
  priceNotice: "Prices subject to change",
  soup: "Try our homemade soup of the day",
  partyTrays: "Party trays — 1 day notice",
  footSubs: "3 foot subs — 2 day notice",
};
