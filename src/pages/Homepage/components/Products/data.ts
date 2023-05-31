import saveImage from "../../../../assets/save.jpg";
import budgetImage from "../../../../assets/budget.jpg";
import investImage from "../../../../assets/invest.jpg";
import insureImage from "../../../../assets/insure.jpg";
import learnImage from "../../../../assets/learn.jpg";

export const productInfo = [
  {
    name: "save",
    catchphrase: "Save at your own pace!",
    productInfo:
      "Save your money daily, weekly, or monthly. No pressure. We work at your pace",
    productImg: saveImage,
    items: [
      "Create Unlimted savings plans",
      "Withdraw anytime",
      "Save with Friends with SAN ID",
      "Be better at saving",
      "Accountability profile",
      "Activity and report",
    ],
  },
  {
    name: "Learn",
    catchphrase: "Financial freedom begins with You and Ardilla",
    productInfo:
      "Ardila offers wealth-building tips from great financial minds to help you get to where you need to be.",
    productImg: learnImage,
    items: [
      "Learn to invest in 2hrs",
      "Get a portfolio manager",
      "Stay on top of your finances",
      "Learn with family and friends",
      "Earn points and reward",
    ],
  },
  {
    name: "Invest",
    catchphrase: "Multiply your finances",
    productInfo:
      "Investment opportunities that gets you closer to financial freedom",
    productImg: investImage,
    items: [
      "Portfolio mangement",
      "Track your returns",
      "Risk Assessment",
      "Vetted Investment opportuinities",
      "Invest within your risk appetite",
      "Invest in Naira and Dollars",
    ],
  },
  {
    name: "Budget",
    catchphrase: "Plan your money",
    productInfo: "Every good budget starts with a good plan for your money",
    productImg: budgetImage,
    items: [
      "Save as you spend",
      "Track your expenses",
      "Organize your finances",
      "Sync and share budgets",
      "Financial guide",
      "Better decision-making",
    ],
  },
  {
    name: "Insurance",
    catchphrase: "Protect your interest",
    productInfo: "Stay protected, live freely",
    productImg: insureImage,
    items: [
      "Vehicle insurance",
      "Home insurance",
      "Mutual Insurance",
      "Life Insurance",
      "Health Insurance",
      "Travel Insurance",
    ],
  },
];
