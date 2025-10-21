import play_store from "./play-store.png";
import apple from "./apple.png";
import avatar from "./avatar.png";

export const icons = { play_store, apple, avatar };

export const menu_list = [
  {
    menu_name: "Salad",
    menu_image:
      "https://plus.unsplash.com/premium_photo-1676047258557-de72954cf17c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=739",
  },
  {
    menu_name: "Beverages",
    menu_image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=957",
  },
  {
    menu_name: "Desserts",
    menu_image:
      "https://plus.unsplash.com/premium_photo-1716892888227-7051cb976c98?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=869",
  },
  {
    menu_name: "Starters",
    menu_image:
      "https://images.unsplash.com/photo-1706650439799-d4a8894556b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
  },
  {
    menu_name: "Main Course",
    menu_image:
      "https://plus.unsplash.com/premium_photo-1663840345377-3813d196d5da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  },
  {
    menu_name: "Sides",
    menu_image:
      "https://images.unsplash.com/photo-1598679253544-2c97992403ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  },
];

export const foodList = [
  // --- Salads ---
    {
      _id: "1",
      name: "Classic Greek Salad",
      image:
        "https://images.unsplash.com/photo-1592417817038-d13fd7342605?q=80&w=2070&auto=format&fit=crop",
      price: 12,
      description:
        "Crisp lettuce, cucumbers, tomatoes, olives, and feta cheese with a lemon-oregano vinaigrette.",
      category: "Salad",
    },
    {
      _id: "2",
      name: "Chicken Caesar Salad",
      image:
        "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2070&auto=format&fit=crop",
      price: 15,
      description:
        "Grilled chicken breast, romaine lettuce, croutons, and parmesan cheese with a creamy Caesar dressing.",
      category: "Salad",
    },
    {
      _id: "3",
      name: "Quinoa & Avocado Salad",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1887&auto=format&fit=crop",
      price: 14,
      description:
        "Nutrient-rich quinoa, creamy avocado, cherry tomatoes, and corn with a lime-cilantro dressing.",
      category: "Salad",
    },
    {
      _id: "4",
      name: "Caprese Salad",
      image:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1941&auto=format&fit=crop",
      price: 11,
      description:
        "Fresh mozzarella, ripe tomatoes, and sweet basil, drizzled with balsamic glaze.",
      category: "Salad",
    },
    {
      _id: "5",
      name: "Cobb Salad",
      image:
        "https://images.unsplash.com/photo-1623952329389-a2c34b17478d?q=80&w=1887&auto=format&fit=crop",
      price: 16,
      description:
        "A hearty mix of chicken, bacon, avocado, egg, tomatoes, and blue cheese on a bed of greens.",
      category: "Salad",
    },
    {
      _id: "6",
      name: "Asian Sesame Salad",
      image:
        "https://plus.unsplash.com/premium_photo-1664472682859-99511d7d0a27?q=80&w=1887&auto=format&fit=crop",
      price: 13,
      description:
        "Mixed greens, mandarin oranges, almonds, and crispy noodles with a sesame ginger dressing.",
      category: "Salad",
    },
    {
      _id: "7",
      name: "Tuna Niçoise Salad",
      image:
        "https://images.unsplash.com/photo-1623238914041-655f40582832?q=80&w=1887&auto=format&fit=crop",
      price: 17,
      description:
        "Flaked tuna, boiled eggs, potatoes, green beans, and olives with a light vinaigrette.",
      category: "Salad",
    },
    {
      _id: "8",
      name: "Berry Spinach Salad",
      image:
        "https://images.unsplash.com/photo-1551201592-a548d5945867?q=80&w=1887&auto=format&fit=crop",
      price: 12,
      description:
        "Fresh spinach, mixed berries, goat cheese, and walnuts with a raspberry vinaigrette.",
      category: "Salad",
    },
    {
      _id: "9",
      name: "Southwest Chicken Salad",
      image:
        "https://plus.unsplash.com/premium_photo-1661763101642-566d5427b3e0?q=80&w=1887&auto=format&fit=crop",
      price: 15,
      description:
        "Grilled chicken, black beans, corn, tortilla strips, and cheddar cheese with a spicy ranch dressing.",
      category: "Salad",
    },
    {
      _id: "10",
      name: "Beet and Goat Cheese Salad",
      image:
        "https://images.unsplash.com/photo-1559948274-54f67a21a5a3?q=80&w=1964&auto=format&fit=crop",
      price: 13,
      description:
        "Roasted beets, creamy goat cheese, and candied pecans over arugula with a balsamic drizzle.",
      category: "Salad",
    },
    // --- Beverages ---
    {
      _id: "11",
      name: "Classic Cola",
      image:
        "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=1887&auto=format&fit=crop",
      price: 3,
      description:
        "An ice-cold, refreshing classic cola served with a slice of lime.",
      category: "Beverages",
    },
    {
      _id: "12",
      name: "Fresh Orange Juice",
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1887&auto=format&fit=crop",
      price: 5,
      description: "100% freshly squeezed orange juice, packed with vitamin C.",
      category: "Beverages",
    },
    {
      _id: "13",
      name: "Iced Tea",
      image:
        "https://images.unsplash.com/photo-1556679343-c7306c19761a?q=80&w=1887&auto=format&fit=crop",
      price: 4,
      description: "Chilled black tea brewed to perfection, served with lemon.",
      category: "Beverages",
    },
    {
      _id: "14",
      name: "Espresso",
      image:
        "https://images.unsplash.com/photo-1593898946132-4752b1b35c05?q=80&w=1964&auto=format&fit=crop",
      price: 4,
      description: "A strong and aromatic shot of finely ground coffee.",
      category: "Beverages",
    },
    {
      _id: "15",
      name: "Cappuccino",
      image:
        "https://images.unsplash.com/photo-1534778101976-62847782c219?q=80&w=1887&auto=format&fit=crop",
      price: 5,
      description: "A perfect balance of espresso, steamed milk, and rich foam.",
      category: "Beverages",
    },
    {
      _id: "16",
      name: "Strawberry Smoothie",
      image:
        "https://images.unsplash.com/photo-1541658016709-82535e94bc6a?q=80&w=1887&auto=format&fit=crop",
      price: 7,
      description:
        "A creamy blend of fresh strawberries, yogurt, and a touch of honey.",
      category: "Beverages",
    },
    {
      _id: "17",
      name: "Mineral Water",
      image:
        "https://images.unsplash.com/photo-1583182181156-342a4204b7cb?q=80&w=1887&auto=format&fit=crop",
      price: 2,
      description: "Chilled still or sparkling mineral water.",
      category: "Beverages",
    },
    {
      _id: "18",
      name: "Lemonade",
      image:
        "https://images.unsplash.com/photo-1505374092298-622874c13a34?q=80&w=1887&auto=format&fit=crop",
      price: 4,
      description: "Homemade lemonade, perfectly sweet and tangy.",
      category: "Beverages",
    },
    {
      _id: "19",
      name: "Hot Chocolate",
      image:
        "https://images.unsplash.com/photo-1605333240833-09b9f7a63d43?q=80&w=1887&auto=format&fit=crop",
      price: 6,
      description: "Rich, decadent hot chocolate topped with whipped cream.",
      category: "Beverages",
    },
    {
      _id: "20",
      name: "Green Tea",
      image:
        "https://images.unsplash.com/photo-1627435601361-ec25f2b740ba?q=80&w=1943&auto=format&fit=crop",
      price: 3,
      description: "A soothing and healthy cup of freshly brewed green tea.",
      category: "Beverages",
    },
    // --- Desserts ---
    {
      _id: "21",
      name: "Chocolate Lava Cake",
      image:
        "https://images.unsplash.com/photo-1586985289936-339235b6c07a?q=80&w=1887&auto=format&fit=crop",
      price: 9,
      description: "Warm, rich chocolate cake with a molten chocolate center.",
      category: "Desserts",
    },
    {
      _id: "22",
      name: "New York Cheesecake",
      image:
        "https://images.unsplash.com/photo-1565599244243-be42034b22a0?q=80&w=1887&auto=format&fit=crop",
      price: 8,
      description:
        "Classic creamy cheesecake with a graham cracker crust, topped with berry coulis.",
      category: "Desserts",
    },
    {
      _id: "23",
      name: "Tiramisu",
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=2072&auto=format&fit=crop",
      price: 10,
      description:
        "A classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
      category: "Desserts",
    },
    {
      _id: "24",
      name: "Apple Pie",
      image:
        "https://images.unsplash.com/photo-1562376558-a75222095213?q=80&w=1887&auto=format&fit=crop",
      price: 7,
      description:
        "Warm apple pie with a flaky crust, served with a scoop of vanilla ice cream.",
      category: "Desserts",
    },
    {
      _id: "25",
      name: "Crème Brûlée",
      image:
        "https://images.unsplash.com/photo-1616952723145-212d531a68a5?q=80&w=1887&auto=format&fit=crop",
      price: 9,
      description:
        "Rich custard base topped with a layer of hardened caramelized sugar.",
      category: "Desserts",
    },
    {
      _id: "26",
      name: "Red Velvet Cake",
      image:
        "https://images.unsplash.com/photo-1616541823729-00fe0aacd3be?q=80&w=1887&auto=format&fit=crop",
      price: 8,
      description:
        "A slice of vibrant red velvet cake with creamy cream cheese frosting.",
      category: "Desserts",
    },
    {
      _id: "27",
      name: "Panna Cotta",
      image:
        "https://images.unsplash.com/photo-1549487977-062d3a3d5b12?q=80&w=1885&auto=format&fit=crop",
      price: 8,
      description:
        "An Italian dessert of sweetened cream thickened and molded, served with a berry sauce.",
      category: "Desserts",
    },
    {
      _id: "28",
      name: "Chocolate Mousse",
      image:
        "https://images.unsplash.com/photo-1554433607-68b593f2f042?q=80&w=1887&auto=format&fit=crop",
      price: 7,
      description:
        "Light and airy chocolate mousse made with premium dark chocolate.",
      category: "Desserts",
    },
    {
      _id: "29",
      name: "Gelato",
      image:
        "https://images.unsplash.com/photo-1559703248-dca749443c36?q=80&w=1887&auto=format&fit=crop",
      price: 6,
      description:
        "Two scoops of authentic Italian gelato. Choose from various flavors.",
      category: "Desserts",
    },
    {
      _id: "30",
      name: "Fruit Tart",
      image:
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop",
      price: 8,
      description:
        "A buttery crust filled with pastry cream and topped with an assortment of fresh fruits.",
      category: "Desserts",
    },
    // --- Starters ---
    {
      _id: "31",
      name: "Bruschetta",
      image:
        "https://images.unsplash.com/photo-1505253716362-afb74bf50c74?q=80&w=2070&auto=format&fit=crop",
      price: 9,
      description:
        "Toasted baguette slices topped with fresh tomatoes, garlic, basil, and a drizzle of olive oil.",
      category: "Starters",
    },
    {
      _id: "32",
      name: "Spring Rolls",
      image:
        "https://images.unsplash.com/photo-1580959375461-963823485054?q=80&w=1974&auto=format&fit=crop",
      price: 8,
      description:
        "Crispy fried spring rolls filled with vegetables and served with a sweet chili sauce.",
      category: "Starters",
    },
    {
      _id: "33",
      name: "Garlic Bread with Cheese",
      image:
        "https://images.unsplash.com/photo-1627916666249-5f2d90f9f1d8?q=80&w=1965&auto=format&fit=crop",
      price: 7,
      description: "Warm garlic bread topped with melted mozzarella cheese.",
      category: "Starters",
    },
    {
      _id: "34",
      name: "Stuffed Mushrooms",
      image:
        "https://images.unsplash.com/photo-1595015797529-6a4a49c9535c?q=80&w=2070&auto=format&fit=crop",
      price: 10,
      description:
        "Mushroom caps filled with a savory mixture of herbs, breadcrumbs, and cheese.",
      category: "Starters",
    },
    {
      _id: "35",
      name: "Shrimp Cocktail",
      image:
        "https://images.unsplash.com/photo-1625944238235-3f309b6849d4?q=80&w=1935&auto=format&fit=crop",
      price: 14,
      description: "Chilled jumbo shrimp served with a tangy cocktail sauce.",
      category: "Starters",
    },
    {
      _id: "36",
      name: "Onion Rings",
      image:
        "https://images.unsplash.com/photo-1639585114332-93885d518844?q=80&w=1932&auto=format&fit=crop",
      price: 8,
      description:
        "Golden-fried onion rings served with a side of spicy dipping sauce.",
      category: "Starters",
    },
    {
      _id: "37",
      name: "Chicken Wings",
      image:
        "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=2070&auto=format&fit=crop",
      price: 12,
      description:
        "Crispy chicken wings tossed in your choice of BBQ or Buffalo sauce.",
      category: "Starters",
    },
    {
      _id: "38",
      name: "Mozzarella Sticks",
      image:
        "https://images.unsplash.com/photo-1634536733221-72951907e5a9?q=80&w=1887&auto=format&fit=crop",
      price: 9,
      description: "Fried mozzarella sticks served with a warm marinara sauce.",
      category: "Starters",
    },
    {
      _id: "39",
      name: "Calamari",
      image:
        "https://images.unsplash.com/photo-1549012489-361c44569502?q=80&w=1935&auto=format&fit=crop",
      price: 13,
      description:
        "Lightly breaded and fried calamari rings served with lemon and aioli.",
      category: "Starters",
    },
    {
      _id: "40",
      name: "Tomato Soup",
      image:
        "https://images.unsplash.com/photo-1598103442387-03775a1ae75a?q=80&w=1887&auto=format&fit=crop",
      price: 7,
      description:
        "A creamy and comforting classic tomato soup, garnished with fresh basil.",
      category: "Starters",
    },
    // --- Main Course ---
    {
      _id: "41",
      name: "Grilled Salmon",
      image:
        "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070&auto=format&fit=crop",
      price: 24,
      description:
        "Perfectly grilled salmon fillet served with asparagus and a lemon-dill sauce.",
      category: "Main Course",
    },
    {
      _id: "42",
      name: "Spaghetti Carbonara",
      image:
        "https://images.unsplash.com/photo-1608797223450-248633783163?q=80&w=1887&auto=format&fit=crop",
      price: 18,
      description:
        "Classic Italian pasta with eggs, cheese, pancetta, and black pepper.",
      category: "Main Course",
    },
    {
      _id: "43",
      name: "Ribeye Steak",
      image:
        "https://images.unsplash.com/photo-1546964124-6cce460f09ef?q=80&w=2070&auto=format&fit=crop",
      price: 35,
      description:
        "A juicy, well-marbled ribeye steak cooked to your liking, served with mashed potatoes.",
      category: "Main Course",
    },
    {
      _id: "44",
      name: "Chicken Alfredo",
      image:
        "https://images.unsplash.com/photo-1627042582834-84d4719b4c02?q=80&w=1887&auto=format&fit=crop",
      price: 20,
      description:
        "Fettuccine pasta in a creamy Alfredo sauce with grilled chicken breast.",
      category: "Main Course",
    },
    {
      _id: "45",
      name: "Margherita Pizza",
      image:
        "https://images.unsplash.com/photo-1598021680133-eb3a160ddd34?q=80&w=1887&auto=format&fit=crop",
      price: 16,
      description:
        "Classic pizza with fresh mozzarella, San Marzano tomatoes, basil, and olive oil.",
      category: "Main Course",
    },
    {
      _id: "46",
      name: "Beef Burger",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop",
      price: 17,
      description:
        "A juicy beef patty with lettuce, tomato, onion, and cheese on a brioche bun. Served with fries.",
      category: "Main Course",
    },
    {
      _id: "47",
      name: "Lasagna",
      image:
        "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?q=80&w=2071&auto=format&fit=crop",
      price: 19,
      description:
        "Layers of pasta, rich meat sauce, and creamy béchamel, baked to perfection.",
      category: "Main Course",
    },
    {
      _id: "48",
      name: "Chicken Parmesan",
      image:
        "https://images.unsplash.com/photo-1632778149955-e83f3ce9d448?q=80&w=1965&auto=format&fit=crop",
      price: 22,
      description:
        "Breaded chicken breast, fried and topped with marinara sauce and mozzarella cheese.",
      category: "Main Course",
    },
    {
      _id: "49",
      name: "Fish and Chips",
      image:
        "https://images.unsplash.com/photo-1579887829443-3484a395f144?q=80&w=1924&auto=format&fit=crop",
      price: 18,
      description:
        "Beer-battered cod served with thick-cut fries and tartar sauce.",
      category: "Main Course",
    },
    {
      _id: "50",
      name: "Vegetable Curry",
      image:
        "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=1887&auto=format&fit=crop",
      price: 17,
      description:
        "A mix of fresh vegetables in a fragrant coconut curry sauce, served with jasmine rice.",
      category: "Main Course",
    },
    // --- Sides ---
    {
      _id: "51",
      name: "French Fries",
      image:
        "https://images.unsplash.com/photo-1541592106381-b58e0633fb59?q=80&w=2070&auto=format&fit=crop",
      price: 6,
      description: "Crispy, golden-brown french fries, lightly salted.",
      category: "Sides",
    },
    {
      _id: "52",
      name: "Mashed Potatoes",
      image:
        "https://images.unsplash.com/photo-1619989397985-e46d3f23f5b9?q=80&w=1887&auto=format&fit=crop",
      price: 7,
      description: "Creamy, buttery mashed potatoes, seasoned with herbs.",
      category: "Sides",
    },
    {
      _id: "53",
      name: "Steamed Vegetables",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
      price: 5,
      description: "A healthy mix of steamed broccoli, carrots, and green beans.",
      category: "Sides",
    },
    {
      _id: "54",
      name: "Side Salad",
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop",
      price: 5,
      description:
        "A small garden salad with mixed greens, tomatoes, and cucumbers.",
      category: "Sides",
    },
    {
      _id: "55",
      name: "Garlic Knots",
      image:
        "https://images.unsplash.com/photo-1628139453713-380d440026e6?q=80&w=1887&auto=format&fit=crop",
      price: 6,
      description: "Soft, chewy bread knots tossed in garlic butter and herbs.",
      category: "Sides",
    },
    {
      _id: "56",
      name: "Coleslaw",
      image:
        "https://images.unsplash.com/photo-1604467794349-0b7428cde9ab?q=80&w=1887&auto=format&fit=crop",
      price: 4,
      description:
        "Creamy and tangy coleslaw made with fresh cabbage and carrots.",
      category: "Sides",
    },
    {
      _id: "57",
      name: "Sweet Potato Fries",
      image:
        "https://images.unsplash.com/photo-1599940778120-d44a2e0c15f5?q=80&w=1887&auto=format&fit=crop",
      price: 7,
      description:
        "Crispy sweet potato fries served with a side of chipotle aioli.",
      category: "Sides",
    },
    {
      _id: "58",
      name: "Mac and Cheese",
      image:
        "https://images.unsplash.com/photo-1541592122-2244aa642636?q=80&w=1887&auto=format&fit=crop",
      price: 8,
      description: "A small bowl of our rich and creamy baked mac and cheese.",
      category: "Sides",
    },
    {
      _id: "59",
      name: "Rice Pilaf",
      image:
        "https://images.unsplash.com/photo-1627435601361-ec25f2b740ba?q=80&w=1943&auto=format&fit=crop",
      price: 5,
      description: "Fluffy rice pilaf cooked with herbs and toasted orzo.",
      category: "Sides",
    },
    {
      _id: "60",
      name: "Grilled Asparagus",
      image:
        "https://images.unsplash.com/photo-1559059711-255d68113b2e?q=80&w=1887&auto=format&fit=crop",
      price: 7,
      description:
        "Fresh asparagus spears grilled with olive oil, salt, and pepper.",
      category: "Sides",
    },
];
