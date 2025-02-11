import { v4 as uuidv4 } from "uuid";
export const MenuCatalogue = [
    {
      name: "Grocery",
      id: uuidv4(),
      slug: "grocery",
      image: "/src/assets/images/grocery.svg",
      subcategories: [
        {
          name: "Dals",
          slug: "dals",
          id: uuidv4(),
          subcategory: [
            {
              name: "Chana Dal",
              slug: "chana-dal",
              products: [
                {
                  id: uuidv4(),
                  name: "Chana Dal - Premium Quality",
                  options: [
                    {
                      id: uuidv4(),
                      title: "500 g",
                      subOption: "(₹ 0.20 / g)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 100,
                      discPrice: 80,
                      discount: 20,
                      stock: 5,
                    },
                    {
                      id: uuidv4(),
                      title: "1 kg",
                      subOption: "(₹ 0.18 / g)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 180,
                      discPrice: 150,
                      discount: 30,
                      stock: 3,
                    },
                  ],
                },
                {
                  id: uuidv4(),
                  name: "Organic Chana Dal",
                  options: [
                    {
                      id: uuidv4(),
                      title: "500 g",
                      subOption: "(₹ 0.30 / g)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 150,
                      discPrice: 120,
                      discount: 30,
                      stock: 8,
                    },
                    {
                      id: uuidv4(),
                      title: "1 kg",
                      subOption: "(₹ 0.25 / g)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 250,
                      discPrice: 200,
                      discount: 50,
                      stock: 5,
                    },
                  ],
                },
                {
                  id: uuidv4(),
                  name: "Split Chana Dal",
                  options: [
                    {
                      id: uuidv4(),
                      title: "500 g",
                      subOption: "(₹ 0.22 / g)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 110,
                      discPrice: 90,
                      discount: 20,
                      stock: 10,
                    },
                    {
                      id: uuidv4(),
                      title: "1 kg",
                      subOption: "(₹ 0.20 / g)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 200,
                      discPrice: 180,
                      discount: 20,
                      stock: 7,
                    },
                  ],
                },
                {
                  id: uuidv4(),
                  name: "Chana Dal with Skin",
                  options: [
                    {
                      id: uuidv4(),
                      title: "500 g",
                      subOption: "(₹ 0.25 / g)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 125,
                      discPrice: 100,
                      discount: 25,
                      stock: 12,
                    },
                  ],
                },
                {
                  id: uuidv4(),
                  name: "Chana Dal Bulk Pack",
                  options: [
                    {
                      id: uuidv4(),
                      title: "5 kg",
                      subOption: "(₹ 0.15 / g)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 750,
                      discPrice: 700,
                      discount: 50,
                      stock: 10,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Spices",
          slug: "spices",
          id: uuidv4(),
          subcategory: [
            {
              name: "Turmeric Powder",
              slug: "turmeric-powder",
              products: [
                {
                  id: uuidv4(),
                  name: "Organic Turmeric Powder",
                  options: [
                    {
                      id: uuidv4(),
                      title: "200 g",
                      subOption: "(₹ 0.50 / g)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 120,
                      discPrice: 100,
                      discount: 20,
                      stock: 15,
                    },
                    {
                      id: uuidv4(),
                      title: "1 kg",
                      subOption: "(₹ 0.45 / g)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 450,
                      discPrice: 400,
                      discount: 50,
                      stock: 10,
                    },
                  ],
                },
                {
                  id: uuidv4(),
                  name: "Pure Turmeric Powder",
                  options: [
                    {
                      id: uuidv4(),
                      title: "250 g",
                      subOption: "(₹ 0.60 / g)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 150,
                      discPrice: 130,
                      discount: 20,
                      stock: 20,
                    },
                    {
                      id: uuidv4(),
                      title: "500 g",
                      subOption: "(₹ 0.55 / g)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 275,
                      discPrice: 250,
                      discount: 25,
                      stock: 12,
                    },
                  ],
                },
                {
                  id: uuidv4(),
                  name: "Ground Turmeric Powder",
                  options: [
                    {
                      id: uuidv4(),
                      title: "200 g",
                      subOption: "(₹ 0.55 / g)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 110,
                      discPrice: 100,
                      discount: 10,
                      stock: 10,
                    },
                  ],
                },
                {
                  id: uuidv4(),
                  name: "High Curcumin Turmeric",
                  options: [
                    {
                      id: uuidv4(),
                      title: "500 g",
                      subOption: "(₹ 0.70 / g)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 350,
                      discPrice: 300,
                      discount: 50,
                      stock: 8,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Dairy & Beverages",
      id: uuidv4(),
      slug: "dairy-beverages",
      image: "/src/assets/images/dairybeverages.svg",
      subcategories: [
        {
          name: "Milk",
          slug: "milk",
          id: uuidv4(),
          subcategory: [
            {
              name: "Cow Milk",
              slug: "cow-milk",
              products: [
                {
                  id: uuidv4(),
                  name: "Fresh Cow Milk",
                  options: [
                    {
                      id: uuidv4(),
                      title: "500 ml",
                      subOption: "(₹ 50 / L)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 30,
                      discPrice: 25,
                      discount: 5,
                      stock: 20,
                    },
                    {
                      id: uuidv4(),
                      title: "1 L",
                      subOption: "(₹ 48 / L)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 50,
                      discPrice: 48,
                      discount: 2,
                      stock: 15,
                    },
                  ],
                },
                {
                  id: uuidv4(),
                  name: "Organic Cow Milk",
                  options: [
                    {
                      id: uuidv4(),
                      title: "500 ml",
                      subOption: "(₹ 60 / L)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 35,
                      discPrice: 30,
                      discount: 5,
                      stock: 10,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Cheese",
          slug: "cheese",
          id: uuidv4(),
          subcategory: [
            {
              name: "Mozzarella Cheese",
              slug: "mozzarella-cheese",
              products: [
                {
                  id: uuidv4(),
                  name: "Shredded Mozzarella",
                  options: [
                    {
                      id: uuidv4(),
                      title: "200 g",
                      subOption: "(₹ 70 / 100 g)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 150,
                      discPrice: 140,
                      discount: 10,
                      stock: 25,
                    },
                  ],
                },
                {
                  id: uuidv4(),
                  name: "Block Mozzarella",
                  options: [
                    {
                      id: uuidv4(),
                      title: "500 g",
                      subOption: "(₹ 65 / 100 g)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 350,
                      discPrice: 325,
                      discount: 25,
                      stock: 15,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Beverages",
          slug: "beverages",
          id: uuidv4(),
          subcategory: [
            {
              name: "Fruit Juices",
              slug: "fruit-juices",
              products: [
                {
                  id: uuidv4(),
                  name: "Orange Juice",
                  options: [
                    {
                      id: uuidv4(),
                      title: "1 L",
                      subOption: "(₹ 40 / 250 ml)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 200,
                      discPrice: 160,
                      discount: 40,
                      stock: 30,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }, 
    {
      name: "Packaged Food",
      id: uuidv4(),
      slug: "package-food",
      image: "/src/assets/images/packaged-foods.svg",
      subcategories: [
        {
          name: "Snacks",
          slug: "snacks",
          id: uuidv4(),
          subcategory: [
            {
              name: "Chips",
              slug: "chips",
              products: [
                {
                  id: uuidv4(),
                  name: "Potato Chips",
                  options: [
                    {
                      id: uuidv4(),
                      title: "100 g",
                      subOption: "(₹ 2 / g)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 50,
                      discPrice: 40,
                      discount: 10,
                      stock: 25,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Fruits & Vegetables",
      id: uuidv4(),
      slug: "fruits-vegetables",
      image: "/src/assets/images/fruits-vegetables.svg",
      subcategories: [
        {
          name: "Fruits",
          slug: "fruits",
          id: uuidv4(),
          subcategory: [
            {
              name: "Apples",
              slug: "apples",
              products: [
                {
                  id: uuidv4(),
                  name: "Fresh Red Apples",
                  options: [
                    {
                      id: uuidv4(),
                      title: "1 kg",
                      subOption: "(₹ 120 / kg)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 150,
                      discPrice: 120,
                      discount: 30,
                      stock: 15,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Home & Kitchen",
      id: uuidv4(),
      slug: "home-kitchen",
      image: "/src/assets/images/home-kitchen.svg",
      subcategories: [
        {
          name: "Cookware",
          slug: "cookware",
          id: uuidv4(),
          subcategory: [
            {
              name: "Non-Stick Pans",
              slug: "non-stick-pans",
              products: [
                {
                  id: uuidv4(),
                  name: "Non-Stick Frying Pan",
                  options: [
                    {
                      id: uuidv4(),
                      title: "24 cm",
                      subOption: "(₹ 500 / unit)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 600,
                      discPrice: 500,
                      discount: 100,
                      stock: 10,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Storage",
          slug: "storage",
          id: uuidv4(),
          subcategory: [
            {
              name: "Plastic Containers",
              slug: "plastic-containers",
              products: [
                {
                  id: uuidv4(),
                  name: "Airtight Plastic Container",
                  options: [
                    {
                      id: uuidv4(),
                      title: "1 L",
                      subOption: "(₹ 50 / unit)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 70,
                      discPrice: 50,
                      discount: 20,
                      stock: 25,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Kitchen Tools",
          slug: "kitchen-tools",
          id: uuidv4(),
          subcategory: [
            {
              name: "Cutlery",
              slug: "cutlery",
              products: [
                {
                  id: uuidv4(),
                  name: "Stainless Steel Knife Set",
                  options: [
                    {
                      id: uuidv4(),
                      title: "6 Pieces",
                      subOption: "(₹ 600 / set)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 800,
                      discPrice: 600,
                      discount: 200,
                      stock: 8,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Home Appliances",
          slug: "home-appliances",
          id: uuidv4(),
          subcategory: [
            {
              name: "Microwaves",
              slug: "microwaves",
              products: [
                {
                  id: uuidv4(),
                  name: "Convection Microwave Oven",
                  options: [
                    {
                      id: uuidv4(),
                      title: "20 L",
                      subOption: "(₹ 8000 / unit)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 10000,
                      discPrice: 8000,
                      discount: 2000,
                      stock: 5,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Dining",
          slug: "dining",
          id: uuidv4(),
          subcategory: [
            {
              name: "Plates",
              slug: "plates",
              products: [
                {
                  id: uuidv4(),
                  name: "Melamine Dinner Plates",
                  options: [
                    {
                      id: uuidv4(),
                      title: "6 Pieces",
                      subOption: "(₹ 1000 / set)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 1200,
                      discPrice: 1000,
                      discount: 200,
                      stock: 12,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Sports & Fitness",
      slug: "sports-fitness",
      id: uuidv4(),
      image: "/src/assets/images/sports-fitness.svg",
      subcategories: [
        {
          name: "Exercise Equipment",
          slug: "exercise-equipment",
          id: uuidv4(),
          subcategory: [
            {
              name: "Treadmills",
              slug: "treadmills",
              products: [
                {
                  id: uuidv4(),
                  name: "Motorized Treadmill",
                  options: [
                    {
                      id: uuidv4(),
                      title: "1.5 HP Motor",
                      subOption: "(Max Speed: 10 km/h)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 30000,
                      discPrice: 25000,
                      discount: 5000,
                      stock: 4,
                    },
                    {
                      id: uuidv4(),
                      title: "2.0 HP Motor",
                      subOption: "(Max Speed: 12 km/h)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 40000,
                      discPrice: 35000,
                      discount: 5000,
                      stock: 3,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Sports Gear",
          slug: "sports-gear",
          id: uuidv4(),
          subcategory: [
            {
              name: "Cricket",
              slug: "cricket",
              products: [
                {
                  id: uuidv4(),
                  name: "Cricket Bat",
                  options: [
                    {
                      id: uuidv4(),
                      title: "Size 6",
                      subOption: "(For Teenagers)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 2000,
                      discPrice: 1800,
                      discount: 200,
                      stock: 10,
                    },
                    {
                      id: uuidv4(),
                      title: "Size Full",
                      subOption: "(For Adults)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 2500,
                      discPrice: 2200,
                      discount: 300,
                      stock: 8,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Yoga Accessories",
          slug: "yoga-accessories",
          id: uuidv4(),
          subcategory: [
            {
              name: "Yoga Mats",
              slug: "yoga-mats",
              products: [
                {
                  id: uuidv4(),
                  name: "Anti-Slip Yoga Mat",
                  options: [
                    {
                      id: uuidv4(),
                      title: "5 mm Thickness",
                      subOption: "(₹ 300 / unit)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 500,
                      discPrice: 300,
                      discount: 200,
                      stock: 15,
                    },
                    {
                      id: uuidv4(),
                      title: "8 mm Thickness",
                      subOption: "(₹ 400 / unit)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 700,
                      discPrice: 400,
                      discount: 300,
                      stock: 12,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Outdoor Sports",
          slug: "outdoor-sports",
          id: uuidv4(),
          subcategory: [
            {
              name: "Football",
              slug: "football",
              products: [
                {
                  id: uuidv4(),
                  name: "Standard Football",
                  options: [
                    {
                      id: uuidv4(),
                      title: "Size 5",
                      subOption: "(For Adults)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 1200,
                      discPrice: 1000,
                      discount: 200,
                      stock: 20,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Fitness Accessories",
          slug: "fitness-accessories",
          id: uuidv4(),
          subcategory: [
            {
              name: "Dumbbells",
              slug: "dumbbells",
              products: [
                {
                  id: uuidv4(),
                  name: "Rubber Coated Dumbbells",
                  options: [
                    {
                      id: uuidv4(),
                      title: "2 kg Pair",
                      subOption: "(₹ 500 / pair)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 700,
                      discPrice: 500,
                      discount: 200,
                      stock: 25,
                    },
                    {
                      id: uuidv4(),
                      title: "5 kg Pair",
                      subOption: "(₹ 1000 / pair)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 1500,
                      discPrice: 1000,
                      discount: 500,
                      stock: 18,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Bed & Bath",
      id: uuidv4(),
      slug: "bed-bath",
      image: "/src/assets/images/bed-bath.svg",
      subcategories: [
        {
          name: "Bedding",
          slug: "bedding",
          id: uuidv4(),
          subcategory: [
            {
              name: "Bedsheets",
              slug: "bedsheets",
              products: [
                {
                  id: uuidv4(),
                  name: "Cotton Double Bedsheet",
                  options: [
                    {
                      id: uuidv4(),
                      title: "Standard Size",
                      subOption: "(200 x 220 cm)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 1200,
                      discPrice: 950,
                      discount: 250,
                      stock: 10,
                    },
                    {
                      id: uuidv4(),
                      title: "King Size",
                      subOption: "(240 x 260 cm)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 1500,
                      discPrice: 1200,
                      discount: 300,
                      stock: 8,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Pillows & Cushions",
          slug: "pillows-cushions",
          id: uuidv4(),
          subcategory: [
            {
              name: "Memory Foam Pillows",
              slug: "memory-foam-pillows",
              products: [
                {
                  id: uuidv4(),
                  name: "Orthopedic Memory Foam Pillow",
                  options: [
                    {
                      id: uuidv4(),
                      title: "Standard Size",
                      subOption: "(60 x 40 cm)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 2000,
                      discPrice: 1700,
                      discount: 300,
                      stock: 12,
                    },
                    {
                      id: uuidv4(),
                      title: "Large Size",
                      subOption: "(70 x 50 cm)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 2500,
                      discPrice: 2100,
                      discount: 400,
                      stock: 6,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Bath Linen",
          slug: "bath-linen",
          id: uuidv4(),
          subcategory: [
            {
              name: "Bath Towels",
              slug: "bath-towels",
              products: [
                {
                  id: uuidv4(),
                  name: "Luxury Cotton Towel",
                  options: [
                    {
                      id: uuidv4(),
                      title: "Large",
                      subOption: "(150 x 75 cm)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 800,
                      discPrice: 650,
                      discount: 150,
                      stock: 20,
                    },
                    {
                      id: uuidv4(),
                      title: "Extra Large",
                      subOption: "(180 x 90 cm)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 1000,
                      discPrice: 850,
                      discount: 150,
                      stock: 15,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Bath Accessories",
          slug: "bath-accessories",
          id: uuidv4(),
          subcategory: [
            {
              name: "Shower Curtains",
              slug: "shower-curtains",
              products: [
                {
                  id: uuidv4(),
                  name: "Waterproof Shower Curtain",
                  options: [
                    {
                      id: uuidv4(),
                      title: "180 x 180 cm",
                      subOption: "(₹ 400 / unit)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 600,
                      discPrice: 400,
                      discount: 200,
                      stock: 18,
                    },
                    {
                      id: uuidv4(),
                      title: "200 x 200 cm",
                      subOption: "(₹ 500 / unit)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 800,
                      discPrice: 500,
                      discount: 300,
                      stock: 10,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Blankets & Comforters",
          slug: "blankets-comforters",
          id: uuidv4(),
          subcategory: [
            {
              name: "Winter Blankets",
              slug: "winter-blankets",
              products: [
                {
                  id: uuidv4(),
                  name: "Heavy Winter Blanket",
                  options: [
                    {
                      id: uuidv4(),
                      title: "Double",
                      subOption: "(200 x 220 cm)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 3000,
                      discPrice: 2700,
                      discount: 300,
                      stock: 5,
                    },
                    {
                      id: uuidv4(),
                      title: "King",
                      subOption: "(240 x 260 cm)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 3500,
                      discPrice: 3200,
                      discount: 300,
                      stock: 3,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Home Utility & Organizers",    
      id: uuidv4(),
      slug: "home-utility-organizers",
      image: "/src/assets/images/home-utility-organizers.svg",
      subcategories: [
        {
          name: "Storage Solutions",
          slug: "storage-solutions",
          id: uuidv4(),
          subcategory: [
            {
              name: "Plastic Storage Boxes",
              slug: "plastic-storage-boxes",
              products: [
                {
                  id: uuidv4(),
                  name: "Transparent Plastic Storage Box",
                  options: [
                    {
                      id: uuidv4(),
                      title: "10 L",
                      subOption: "(₹ 30 / L)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 350,
                      discPrice: 300,
                      discount: 50,
                      stock: 20,
                    },
                    {
                      id: uuidv4(),
                      title: "20 L",
                      subOption: "(₹ 25 / L)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 600,
                      discPrice: 500,
                      discount: 100,
                      stock: 15,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Cleaning Supplies",
          slug: "cleaning-supplies",
          id: uuidv4(),
          subcategory: [
            {
              name: "Mops & Buckets",
              slug: "mops-buckets",
              products: [
                {
                  id: uuidv4(),
                  name: "Spin Mop with Bucket",
                  options: [
                    {
                      id: uuidv4(),
                      title: "Standard Set",
                      subOption: "(1 Mop + 1 Bucket)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 1200,
                      discPrice: 1000,
                      discount: 200,
                      stock: 12,
                    },
                    {
                      id: uuidv4(),
                      title: "Deluxe Set",
                      subOption: "(2 Mops + 1 Bucket)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 1500,
                      discPrice: 1300,
                      discount: 200,
                      stock: 8,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Organizers",
          slug: "organizers",
          id: uuidv4(),
          subcategory: [
            {
              name: "Wardrobe Organizers",
              slug: "wardrobe-organizers",
              products: [
                {
                  id: uuidv4(),
                  name: "Collapsible Fabric Storage Boxes",
                  options: [
                    {
                      id: uuidv4(),
                      title: "Set of 3",
                      subOption: "(30 x 30 x 30 cm)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 900,
                      discPrice: 750,
                      discount: 150,
                      stock: 10,
                    },
                    {
                      id: uuidv4(),
                      title: "Set of 6",
                      subOption: "(30 x 30 x 30 cm)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 1800,
                      discPrice: 1500,
                      discount: 300,
                      stock: 6,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Lighting Solutions",
          slug: "lighting-solutions",
          id: uuidv4(),
          subcategory: [
            {
              name: "LED Lamps",
              slug: "led-lamps",
              products: [
                {
                  id: uuidv4(),
                  name: "Rechargeable LED Table Lamp",
                  options: [
                    {
                      id: uuidv4(),
                      title: "5W LED",
                      subOption: "(₹ 500 / unit)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 600,
                      discPrice: 500,
                      discount: 100,
                      stock: 15,
                    },
                    {
                      id: uuidv4(),
                      title: "10W LED",
                      subOption: "(₹ 700 / unit)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 900,
                      discPrice: 700,
                      discount: 200,
                      stock: 10,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Home Safety",
          slug: "home-safety",
          id: uuidv4(),
          subcategory: [
            {
              name: "Fire Extinguishers",
              slug: "fire-extinguishers",
              products: [
                {
                  id: uuidv4(),
                  name: "Portable Fire Extinguisher",
                  options: [
                    {
                      id: uuidv4(),
                      title: "1 kg",
                      subOption: "(₹ 800 / unit)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 1000,
                      discPrice: 800,
                      discount: 200,
                      stock: 10,
                    },
                    {
                      id: uuidv4(),
                      title: "2 kg",
                      subOption: "(₹ 1500 / unit)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 1800,
                      discPrice: 1500,
                      discount: 300,
                      stock: 5,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Personal Care & Beauty",    
      id: uuidv4(),
      slug: "personal-care-beauty",
      image: "/src/assets/images/personal-care-beauty.svg",
      subcategories: [
        {
          name: "Skin Care",
          slug: "skin-care",
          id: uuidv4(),
          subcategory: [
            {
              name: "Moisturizers",
              slug: "moisturizers",
              products: [
                {
                  id: uuidv4(),
                  name: "Hydrating Face Moisturizer",
                  options: [
                    {
                      id: uuidv4(),
                      title: "50 ml",
                      subOption: "(₹ 10 / ml)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 600,
                      discPrice: 500,
                      discount: 100,
                      stock: 25,
                    },
                    {
                      id: uuidv4(),
                      title: "100 ml",
                      subOption: "(₹ 9 / ml)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 900,
                      discPrice: 800,
                      discount: 100,
                      stock: 20,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Hair Care",
          slug: "hair-care",
          id: uuidv4(),
          subcategory: [
            {
              name: "Shampoos",
              slug: "shampoos",
              products: [
                {
                  id: uuidv4(),
                  name: "Anti-Dandruff Shampoo",
                  options: [
                    {
                      id: uuidv4(),
                      title: "200 ml",
                      subOption: "(₹ 1.5 / ml)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 400,
                      discPrice: 300,
                      discount: 100,
                      stock: 30,
                    },
                    {
                      id: uuidv4(),
                      title: "500 ml",
                      subOption: "(₹ 1.2 / ml)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 750,
                      discPrice: 600,
                      discount: 150,
                      stock: 15,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Makeup",
          slug: "makeup",
          id: uuidv4(),
          subcategory: [
            {
              name: "Lipsticks",
              slug: "lipsticks",
              products: [
                {
                  id: uuidv4(),
                  name: "Matte Lipstick",
                  options: [
                    {
                      id: uuidv4(),
                      title: "Red Shade",
                      subOption: "(₹ 500 / unit)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 600,
                      discPrice: 500,
                      discount: 100,
                      stock: 20,
                    },
                    {
                      id: uuidv4(),
                      title: "Pink Shade",
                      subOption: "(₹ 500 / unit)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 600,
                      discPrice: 500,
                      discount: 100,
                      stock: 15,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Fragrances",
          slug: "fragrances",
          id: uuidv4(),
          subcategory: [
            {
              name: "Perfumes",
              slug: "perfumes",
              products: [
                {
                  id: uuidv4(),
                  name: "Luxury Perfume",
                  options: [
                    {
                      id: uuidv4(),
                      title: "50 ml",
                      subOption: "(₹ 20 / ml)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 1200,
                      discPrice: 1000,
                      discount: 200,
                      stock: 10,
                    },
                    {
                      id: uuidv4(),
                      title: "100 ml",
                      subOption: "(₹ 18 / ml)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 2000,
                      discPrice: 1800,
                      discount: 200,
                      stock: 5,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Oral Care",
          slug: "oral-care",
          id: uuidv4(),
          subcategory: [
            {
              name: "Toothpaste",
              slug: "toothpaste",
              products: [
                {
                  id: uuidv4(),
                  name: "Whitening Toothpaste",
                  options: [
                    {
                      id: uuidv4(),
                      title: "100 g",
                      subOption: "(₹ 2 / g)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 250,
                      discPrice: 200,
                      discount: 50,
                      stock: 50,
                    },
                    {
                      id: uuidv4(),
                      title: "200 g",
                      subOption: "(₹ 1.8 / g)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 450,
                      discPrice: 360,
                      discount: 90,
                      stock: 30,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Books & Stationary",    
      id: uuidv4(),
      slug: "books-stationary",
      image: "/src/assets/images/books-stationary.svg",
      subcategories: [
        {
          name: "Books",
          slug: "books",
          id: uuidv4(),
          subcategory: [
            {
              name: "Fiction",
              slug: "fiction",
              products: [
                {
                  id: uuidv4(),
                  name: "Mystery Novel - The Silent Truth",
                  options: [
                    {
                      id: uuidv4(),
                      title: "Paperback",
                      subOption: "(₹ 0.50 / page)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 500,
                      discPrice: 450,
                      discount: 50,
                      stock: 20,
                    },
                    {
                      id: uuidv4(),
                      title: "Hardcover",
                      subOption: "(₹ 0.60 / page)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 700,
                      discPrice: 600,
                      discount: 100,
                      stock: 10,
                    },
                  ],
                },
              ],
            },
            {
              name: "Non-Fiction",
              slug: "non-fiction",
              products: [
                {
                  id: uuidv4(),
                  name: "Self-Help Guide - Unlock Your Potential",
                  options: [
                    {
                      id: uuidv4(),
                      title: "Paperback",
                      subOption: "(₹ 0.40 / page)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 400,
                      discPrice: 350,
                      discount: 50,
                      stock: 15,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Stationary",
          slug: "stationary",
          id: uuidv4(),
          subcategory: [
            {
              name: "Notebooks",
              slug: "notebooks",
              products: [
                {
                  id: uuidv4(),
                  name: "A5 Spiral Notebook",
                  options: [
                    {
                      id: uuidv4(),
                      title: "100 Pages",
                      subOption: "(₹ 1.5 / page)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 200,
                      discPrice: 150,
                      discount: 50,
                      stock: 50,
                    },
                  ],
                },
              ],
            },
            {
              name: "Pens",
              slug: "pens",
              products: [
                {
                  id: uuidv4(),
                  name: "Gel Pen - Smooth Writing",
                  options: [
                    {
                      id: uuidv4(),
                      title: "Pack of 5",
                      subOption: "(₹ 20 / pen)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 120,
                      discPrice: 100,
                      discount: 20,
                      stock: 100,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Art Supplies",
          slug: "art-supplies",
          id: uuidv4(),
          subcategory: [
            {
              name: "Watercolors",
              slug: "watercolors",
              products: [
                {
                  id: uuidv4(),
                  name: "Watercolor Paint Set - 12 Colors",
                  options: [
                    {
                      id: uuidv4(),
                      title: "12 ml Tubes",
                      subOption: "(₹ 10 / ml)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 150,
                      discPrice: 120,
                      discount: 30,
                      stock: 30,
                    },
                  ],
                },
              ],
            },
            {
              name: "Brushes",
              slug: "brushes",
              products: [
                {
                  id: uuidv4(),
                  name: "Artist Brush Set - 6 Sizes",
                  options: [
                    {
                      id: uuidv4(),
                      title: "Set of 6",
                      subOption: "(₹ 50 / brush)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 400,
                      discPrice: 300,
                      discount: 100,
                      stock: 25,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Office Supplies",
          slug: "office-supplies",
          id: uuidv4(),
          subcategory: [
            {
              name: "Folders",
              slug: "folders",
              products: [
                {
                  id: uuidv4(),
                  name: "Plastic Document Folder",
                  options: [
                    {
                      id: uuidv4(),
                      title: "Pack of 10",
                      subOption: "(₹ 15 / folder)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 200,
                      discPrice: 150,
                      discount: 50,
                      stock: 40,
                    },
                  ],
                },
              ],
            },
            {
              name: "Staplers",
              slug: "staplers",
              products: [
                {
                  id: uuidv4(),
                  name: "Compact Stapler",
                  options: [
                    {
                      id: uuidv4(),
                      title: "With 500 Staples",
                      subOption: "(₹ 0.10 / staple)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 150,
                      discPrice: 120,
                      discount: 30,
                      stock: 35,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Exam Supplies",
          slug: "exam-supplies",
          id: uuidv4(),
          subcategory: [
            {
              name: "Geometry Boxes",
              slug: "geometry-boxes",
              products: [
                {
                  id: uuidv4(),
                  name: "Complete Geometry Box",
                  options: [
                    {
                      id: uuidv4(),
                      title: "Metal Box",
                      subOption: "(₹ 300 / unit)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 400,
                      discPrice: 300,
                      discount: 100,
                      stock: 20,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Electronics & Appliances",    
      id: uuidv4(),
      slug: "electronics-appliances",
      image: "/src/assets/images/electronics-appliances.svg",
      subcategories: [
        {
          name: "Smartphones",
          slug: "smartphones",
          id: uuidv4(),
          subcategory: [
            {
              name: "Android Phones",
              slug: "android-phones",
              products: [
                {
                  id: uuidv4(),
                  name: "Galaxy Z Flip5",
                  options: [
                    {
                      id: uuidv4(),
                      title: "8 GB RAM + 128 GB Storage",
                      subOption: "(₹ 70,000)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 75000,
                      discPrice: 70000,
                      discount: 5000,
                      stock: 10,
                    },
                    {
                      id: uuidv4(),
                      title: "8 GB RAM + 256 GB Storage",
                      subOption: "(₹ 75,000)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 80000,
                      discPrice: 75000,
                      discount: 5000,
                      stock: 8,
                    },
                  ],
                },
                {
                  id: uuidv4(),
                  name: "Pixel 7 Pro",
                  options: [
                    {
                      id: uuidv4(),
                      title: "12 GB RAM + 128 GB Storage",
                      subOption: "(₹ 90,000)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 95000,
                      discPrice: 90000,
                      discount: 5000,
                      stock: 5,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Laptops",
          slug: "laptops",
          id: uuidv4(),
          subcategory: [
            {
              name: "Gaming Laptops",
              slug: "gaming-laptops",
              products: [
                {
                  id: uuidv4(),
                  name: "Alienware X14",
                  options: [
                    {
                      id: uuidv4(),
                      title: "16 GB RAM + 512 GB SSD",
                      subOption: "(₹ 2,00,000)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 210000,
                      discPrice: 200000,
                      discount: 10000,
                      stock: 4,
                    },
                  ],
                },
              ],
            },
            {
              name: "Ultrabooks",
              slug: "ultrabooks",
              products: [
                {
                  id: uuidv4(),
                  name: "Dell XPS 13",
                  options: [
                    {
                      id: uuidv4(),
                      title: "8 GB RAM + 256 GB SSD",
                      subOption: "(₹ 1,20,000)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 125000,
                      discPrice: 120000,
                      discount: 5000,
                      stock: 6,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Home Appliances",
          slug: "home-appliances",
          id: uuidv4(),
          subcategory: [
            {
              name: "Refrigerators",
              slug: "refrigerators",
              products: [
                {
                  id: uuidv4(),
                  name: "Double Door Refrigerator",
                  options: [
                    {
                      id: uuidv4(),
                      title: "300 L Capacity",
                      subOption: "(₹ 25,000)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 27000,
                      discPrice: 25000,
                      discount: 2000,
                      stock: 10,
                    },
                  ],
                },
              ],
            },
            {
              name: "Microwave Ovens",
              slug: "microwave-ovens",
              products: [
                {
                  id: uuidv4(),
                  name: "Convection Microwave",
                  options: [
                    {
                      id: uuidv4(),
                      title: "30 L Capacity",
                      subOption: "(₹ 15,000)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 17000,
                      discPrice: 15000,
                      discount: 2000,
                      stock: 15,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Audio & Accessories",
          slug: "audio-accessories",
          id: uuidv4(),
          subcategory: [
            {
              name: "Bluetooth Speakers",
              slug: "bluetooth-speakers",
              products: [
                {
                  id: uuidv4(),
                  name: "JBL Flip 6",
                  options: [
                    {
                      id: uuidv4(),
                      title: "10 W Output",
                      subOption: "(₹ 12,000)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 14000,
                      discPrice: 12000,
                      discount: 2000,
                      stock: 20,
                    },
                  ],
                },
              ],
            },
            {
              name: "Earphones",
              slug: "earphones",
              products: [
                {
                  id: uuidv4(),
                  name: "Sony WF-1000XM4",
                  options: [
                    {
                      id: uuidv4(),
                      title: "Noise Cancelling",
                      subOption: "(₹ 20,000)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 22000,
                      discPrice: 20000,
                      discount: 2000,
                      stock: 10,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Television",
          slug: "television",
          id: uuidv4(),
          subcategory: [
            {
              name: "LED TVs",
              slug: "led-tvs",
              products: [
                {
                  id: uuidv4(),
                  name: "Samsung 55-inch Smart TV",
                  options: [
                    {
                      id: uuidv4(),
                      title: "55-inch 4K UHD",
                      subOption: "(₹ 55,000)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 60000,
                      discPrice: 55000,
                      discount: 5000,
                      stock: 8,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Baby & Kids",
      id: uuidv4(),
      slug: "baby-kids",
      image: "/src/assets/images/baby-kids.svg",
      subcategories: [
        {
          name: "Baby Care",
          slug: "baby-care",
          id: uuidv4(),
          subcategory: [
            {
              name: "Diapers",
              slug: "diapers",
              products: [
                {
                  id: uuidv4(),
                  name: "Pampers Premium Care Diapers",
                  options: [
                    {
                      id: uuidv4(),
                      title: "Pack of 20",
                      subOption: "(₹ 15 / diaper)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 400,
                      discPrice: 300,
                      discount: 100,
                      stock: 50,
                    },
                    {
                      id: uuidv4(),
                      title: "Pack of 50",
                      subOption: "(₹ 12 / diaper)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 750,
                      discPrice: 600,
                      discount: 150,
                      stock: 30,
                    },
                  ],
                },
              ],
            },
            {
              name: "Baby Lotion",
              slug: "baby-lotion",
              products: [
                {
                  id: uuidv4(),
                  name: "Johnson's Baby Lotion",
                  options: [
                    {
                      id: uuidv4(),
                      title: "200 ml",
                      subOption: "(₹ 2 / ml)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 450,
                      discPrice: 400,
                      discount: 50,
                      stock: 40,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Toys",
          slug: "toys",
          id: uuidv4(),
          subcategory: [
            {
              name: "Educational Toys",
              slug: "educational-toys",
              products: [
                {
                  id: uuidv4(),
                  name: "Wooden Alphabet Blocks",
                  options: [
                    {
                      id: uuidv4(),
                      title: "Set of 26",
                      subOption: "(₹ 20 / block)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 600,
                      discPrice: 520,
                      discount: 80,
                      stock: 25,
                    },
                  ],
                },
              ],
            },
            {
              name: "Soft Toys",
              slug: "soft-toys",
              products: [
                {
                  id: uuidv4(),
                  name: "Teddy Bear",
                  options: [
                    {
                      id: uuidv4(),
                      title: "Medium Size",
                      subOption: "(₹ 500)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 600,
                      discPrice: 500,
                      discount: 100,
                      stock: 15,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Kids Clothing",
          slug: "kids-clothing",
          id: uuidv4(),
          subcategory: [
            {
              name: "Boys' T-Shirts",
              slug: "boys-t-shirts",
              products: [
                {
                  id: uuidv4(),
                  name: "Cartoon Printed T-Shirt",
                  options: [
                    {
                      id: uuidv4(),
                      title: "Size S",
                      subOption: "(₹ 300)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 350,
                      discPrice: 300,
                      discount: 50,
                      stock: 20,
                    },
                  ],
                },
              ],
            },
            {
              name: "Girls' Dresses",
              slug: "girls-dresses",
              products: [
                {
                  id: uuidv4(),
                  name: "Floral Summer Dress",
                  options: [
                    {
                      id: uuidv4(),
                      title: "Size M",
                      subOption: "(₹ 700)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 800,
                      discPrice: 700,
                      discount: 100,
                      stock: 10,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Kids Furniture",
          slug: "kids-furniture",
          id: uuidv4(),
          subcategory: [
            {
              name: "Study Desks",
              slug: "study-desks",
              products: [
                {
                  id: uuidv4(),
                  name: "Adjustable Study Desk",
                  options: [
                    {
                      id: uuidv4(),
                      title: "Wood Finish",
                      subOption: "(₹ 4,000)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 4500,
                      discPrice: 4000,
                      discount: 500,
                      stock: 8,
                    },
                  ],
                },
              ],
            },
            {
              name: "Kids Beds",
              slug: "kids-beds",
              products: [
                {
                  id: uuidv4(),
                  name: "Single Bed with Storage",
                  options: [
                    {
                      id: uuidv4(),
                      title: "White Finish",
                      subOption: "(₹ 8,000)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 8500,
                      discPrice: 8000,
                      discount: 500,
                      stock: 5,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "School Supplies",
          slug: "school-supplies",
          id: uuidv4(),
          subcategory: [
            {
              name: "School Bags",
              slug: "school-bags",
              products: [
                {
                  id: uuidv4(),
                  name: "Spiderman Themed Bag",
                  options: [
                    {
                      id: uuidv4(),
                      title: "Medium Size",
                      subOption: "(₹ 1,200)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 1300,
                      discPrice: 1200,
                      discount: 100,
                      stock: 15,
                    },
                  ],
                },
              ],
            },
            {
              name: "Lunch Boxes",
              slug: "lunch-boxes",
              products: [
                {
                  id: uuidv4(),
                  name: "Steel Lunch Box with Compartments",
                  options: [
                    {
                      id: uuidv4(),
                      title: "500 ml Capacity",
                      subOption: "(₹ 800)",
                      imgSrc: "https://dummyimage.com/150x120/cccccc/000000",
                      mrp: 900,
                      discPrice: 800,
                      discount: 100,
                      stock: 25,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }              
  ];