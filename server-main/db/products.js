const products = [
  {
    productName: "Məhsul Adı",
    size: ["S", "M", "L"],
    price: 99.99,
    totalQty: 100,
    totalSold: 10,
    measure: 1,
    category: "category_id", 
    color: "qırmızı",
    rating: "review_id",
    comments: [
      {
        body: [
          {
            content: "Çox yaxşı məhsuldur",
            rating: 5,
          },
        ],
        username: "istifadechi1",
        userId: "user_id_1",
      },
    ],
    mainImageUrl: "https://example.com/image1.jpg",
    additionalImages: [
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg",
    ],
    material: "pambıq",
    popularity: 90,
    description: "Bu məhsul yüksək keyfiyyətlidir.",
    discount: "10%",
    weight: 1.5,
    dimensions: 30,
    warrantyDuration: 12, 
    certification: "ISO 9001",
    returnPolicy: "14 gün ərzində qaytarmaq olar",
    creationDate: "2025-05-12",
    lastUpdated: new Date(),
    reviewsCount: 120,
    averageRating: 4.5,
    brand: "brand_id", 
    productAvailability: {
      online: true,
      stores: ["Baku Mall", "Ganja Plaza"],
    },
    repairService: {
      available: true,
      details: "1 il ərzində pulsuz təmir xidməti",
    },
    priceHistory: [
      {
        date: new Date("2025-01-01"),
        price: 120.0,
      },
      {
        date: new Date("2025-03-01"),
        price: 110.0,
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
module.exports = { products };
