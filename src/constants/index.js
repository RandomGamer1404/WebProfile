import {

  jn,
  power,
  pyspark,
  python,
  hadoop,
  mysql,
  canva,
  tableau,
  git,
  figma,
  p1,
  nene,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "t2",
    icon: pyspark,
  },
  {
    name: "t3",
    icon: power,
  },
  {
    name: "t4",
    icon: hadoop,
  },
  {
    name: "t5",
    icon: jn,
  },
  {
    name: "t6",
    icon: python,
  },
  {
    name: "t7",
    icon: canva,
  },
  {
    name: "t8",
    icon: mysql,
  },
  {
    name: "t9",
    icon: tableau,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const projects = [
  {
    name: "Prediction of COVID-19 Cases",
    description:
      "Built a predictive model to forecast trends in COVID-19 cases using historical data.Implemented and compared models using FB Prophet and ARIMA for accurate predictions.",
    tags: [
      {
        name: "pandas",
        color: "blue-text-gradient",
      },
      {
        name: "ARIMA",
        color: "green-text-gradient",
      },
      {
        name: "FBProphet",
        color: "pink-text-gradient",
      },
    ],
    image: p1,
    source_code_link: "https://github.com/RandomGamer1404/COVID-Prediction",
  },
  {
    name: "Digit Recognition",
    description:
      "Developed a neural network from scratch to perform digit recognition, leveraging Python, Pandas, and Matplotlib for data handling, visualization, and model training. Designed a two-layer neural network with ReLU and softmax and Sigmoid activation functions, achieving significant accuracy improvements through iterative training and validation.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "matplotlib",
        color: "pink-text-gradient",
      },
    ],
    image: nene,
    source_code_link: "https://github.com/RandomGamer1404/NeNe",
  },
  {
    name: "Handwritten Answer Key Evaluation",
    description:
      " Designed a Handwriting-OCR and NLP pipeline. TrOCR/Tesseract trained on custom dataset used to convert handwriting to json format. The output from OCR is passed to Mistral7B model that evaluates, scores and provides feedback based on comparison to Synoptic.",
    tags: [
      {
        name: "TrOCR",
        color: "blue-text-gradient",
      },
      {
        name: "Mistral7B",
        color: "green-text-gradient",
      },
      {
        name: "Tesseract",
        color: "pink-text-gradient",
      },
    ],

    source_code_link: "https://github.com/RandomGamer1404/Answer_Evaluation",
  },
];

export { technologies, projects };
