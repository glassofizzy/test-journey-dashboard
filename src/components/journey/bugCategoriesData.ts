interface Bug {
  title: string;
  priority: string;
  description: string;
  treatment: string;
  highlightArea?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

interface BugCategories {
  [key: string]: {
    color: string;
    bugs: Bug[];
  };
}

export const bugCategories: BugCategories = {
  visual: {
    color: "#F2C94C",
    bugs: [
      {
        title: "Logo is blurry on mobile",
        priority: "High",
        description: "The logo appears pixelated on mobile devices. This detracts from the app's visual appeal.",
        treatment: "Verify the correct logo is uploaded for mobile or use SVG.",
        highlightArea: { x: 10, y: 10, width: 100, height: 40 }
      },
      {
        title: "Button color inconsistency",
        priority: "Medium",
        description: "Different buttons use varied styles across the app. This makes UI feel unpolished and inconsistent.",
        treatment: "Consistently apply the correct color palette on the UI or create a design system",
        highlightArea: { x: 120, y: 200, width: 80, height: 40 }
      }
    ]
  },
  content: {
    color: "#2F80ED",
    bugs: [
      {
        title: "API integration issues",
        priority: "High",
        description: "Data is not loading correctly in certain sections of the app. The API is returning unexpected responses.",
        treatment: "Debug API endpoints and check for data transformations."
      }
    ]
  },
  usability: {
    color: "#BB6BD9",
    bugs: [
      {
        title: "Slow response time in chat feature",
        priority: "Medium",
        description: "There is a noticeable lag when sending messages in the chat. This leads to frustrating user experience.",
        treatment: "Optimize server-side and check message rendering."
      }
    ]
  },
  localization: {
    color: "#00A99D",
    bugs: [
      {
        title: "Invalid input handling error",
        priority: "Low",
        description: "Incorrect validation message appears when handling user-provided information in localized version.",
        treatment: "Review localization files to make sure correct text is showing up or review the input validator."
      }
    ]
  }
};