interface ProductDetail {
  heading: string;
  description: string;
  points?: string[];
}

interface Feature {
  image: string;
  subImage: string;
  title: string;
  description: string[];
}

type newProduct = {
  id: number;
  coverImage: string;
  productName: string;
  tagline: string;
  introduction: string;
  description: string;
  productImage: string;
  size: string[];
  heading?: string;
  details: ProductDetail[];
  features: Feature[];
};

export const newProducts: newProduct[] = [
  {
    id: 1,
    coverImage: "/assets/newImages/Product1.jpg",
    productName: "Huggies Skin Perfect newborn Diapers",
    tagline:
      "Soft surface combined with Dual Zone technology helps soothe and nourish your baby's skin. Clinically proven to help prevent skin irritation, safe for sensitive skin.",
    introduction: "HUGGIES SKIN PERFECT DIAPER LINE WITH 2 ABSORBENT AREAS",
    description:
      "Huggies is one of the diaper brands, baby diapers receive the trust of millions of mothers, become a trustworthy friend to accompany mother and baby on their journey to adulthood. The Huggies Skin Perfect 2-permeable area product line was born with the noble mission of protecting your baby's immature and sensitive skin, while bringing comfort to adorable little angel“. Manufactured with modern Dual Zone technology, Huggies Skin Perfect is the perfect choice to help protect your baby in the first days of life.",
    size: ["md", "lg", "xl", "xxl"],
    productImage: "/assets/newImages/Product1Img.jpg",
    heading:
      "Outstanding benefits and advantages of Huggies Skin Perfect diapers",
    details: [
      {
        heading: "Dual Zone dual absorbent technology",
        description:
          "One of the outstanding features of the Huggies Skin Perfect product line is Dual Zone technology. This is a dual absorbent technology with 2 separate super absorbent areas, helping to absorb and lock urine and feces. This helps limit the mixing of stools and urine, thereby preventing the development of bacteria that protect healthy baby's skin. At the same time, this technology also helps to effectively prevent double-sided overflows.",
      },
      {
        heading: "Reduces loose stools on baby's skin by up to 93%",
        description:
          "Besides, with a specially designed surface that helps absorb and lock liquid, Huggies Skin Perfect also has the ability to reduce the amount of liquid stool on your baby's skin by up to 93%. This helps soothe and nourish your baby's skin.",
      },
      {
        heading: "Limit skin irritation",
        description:
          "The product surface is designed to be soft thanks to the premium material layer. The bottom membrane drains moisture designed with more than 4,000 breathable holes, helping to drain moisture 100%, making your baby's skin always dry and airy. At the same time, the product does not contain chlorine, dioxins or heavy metals and always maintains a pH below 6.5, so it will help minimize skin rash and skin irritation for your baby.",
      },
      {
        heading: "Huggies Skin Perfect product lines",
        description:
          "With outstanding improved advantages to ensure safety for your baby, Huggies Skin Perfect has now appeared on the market with the following products:",
      },
      {
        heading: "Huggies Skin Perfect diapers",
        description:
          "Huggies Skin Perfect diapers designed to meet the advanced requirements of parents in taking care of their children, thereby giving parents peace of mind because:",
        points: [
          "Outstanding advantages: Diapers paste Huggies Skin Perfect is a specially designed product line with modern Dual Zone dual absorbent technology. This design includes two separate absorbent areas: liquid fecal permeable area and urine permeable area combined with liquid locking technology. At the same time, diaper paste has the ability to maintain a stable pH, reducing skin irritation. In addition, the product is equipped with an overflow compartment to prevent stool from sticking to the baby's back and has the ability to reduce loose stool on the baby's skin by up to 93%. Outstanding absorbent features, helping your baby's skin stay dry and comfortable.",
          "Size: Huggies Skin Perfect diapers come in a variety of sizes for babies to choose from, includingsize NB (<5kg), size S (4 - 8 kg) and size M (6 - 11 kg).",
          "Packaging: The Huggies Skin Perfect diaper line is packaged in 38 to 82 pieces in each package, depending on the size the parents choose.",
          "Price: Huggies Skin Perfect diapers have prices ranging from 134,700 - 339,600 VND/diaper bag, suitable for each family's requirements.",
        ],
      },
      {
        heading: "Skin Perfect Huggies Pads",
        description:
          "In addition to diapers, Huggies Skin Perfect is also released huggies Skin Perfect newborn pads brings convenience to baby care, while ensuring safety for your baby's sensitive skin",
        points: [
          "Outstanding advantages: Huggies Skin Perfect pads also have a modern design of two separate permeable areas, helping to optimally limit skin rash. The special design reduces the amount of loose stools on your baby's skin by up to 93% and is capable of effectively preventing bilateral spills. The capacity of the pad is large, which increases absorbency, thereby providing a good night's sleep for your baby all night. In addition, the super soft pad surface combined with the bottom membrane drains moisture to 100%, helping your baby's skin stay dry and comfortable.",
          "Size: Skin Perfect Huggies pads have dimensions of NB1 suitable for babies under 5kg and NB2 for babies weighing 4 - 8kg.",
          "Packaging: Huggies Skin Perfect pads are packaged from 60 to 117 pieces in each package depending on size.",
          "Cost: Newborn pads Huggies Skin Perfect has a selling price ranging from 105,000 - 173,200 VND/bag, suitable for parents' budget but still ensuring high quality and safety for their babies.",
        ],
      },
    ],
    features: [
      {
        image: "/assets/newImages/P1F1.jpg",
        subImage: "/assets/newImages/P1T1.jpg",
        title: "DUAL ZONE technology",
        description: [
          "2 separate superabsorbent areas, which infiltrate and lock urine with feces while effectively preventing bilateral spills",
          "Limits stool and urine from mixing together, preventing bacterial growth on the skin",
        ],
      },
      {
        image: "/assets/newImages/P1F2.jpg",
        subImage: "/assets/newImages/P1T2.jpg",
        title: "REDUCE LIQUID STOOLS BY UP TO 93% ON BABY'S SKIN",
        description: ["Separate design surface to absorb and lock loose stool"],
      },
      {
        image: "/assets/newImages/P1F3.jpg",
        subImage: "/assets/newImages/P1T3.jpg",
        title: "HELPS REDUCE SKIN IRRITATION",
        description: [
          "Able to maintain a stable pH for baby's skin",
          "The diaper surface is soft and well-absorbent, helping to reduce skin irritants",
        ],
      },
      {
        image: "/assets/newImages/P1F4.jpg",
        subImage: "/assets/newImages/P1T4.jpg",
        title: "ABSORBS THROUGH THE NIGHT",
        description: [
          "With a large capacity, diapers can absorb up to 12 hours, helping your baby sleep well all night",
        ],
      },
      {
        image: "/assets/newImages/P1F5.jpg",
        subImage: "/assets/newImages/P1T5.jpg",
        title: "REPLACE TEA MELALEUCA NEWBORN DIAPERS",
        description: ["With many outstanding improvements"],
      },
    ],
  },
];
