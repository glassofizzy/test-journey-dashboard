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

// Organize bugs by screenshot index
export const bugCategoriesByScreen: BugCategories[] = [
  // Screen 1: Search NFTs
  {
    visual: {
      color: "#F2C94C",
      bugs: [
        {
          title: "Logo is blurry on mobile",
          priority: "High",
          description: "The logo appears pixelated on mobile devices. This detracts from the app's visual appeal.",
          treatment: "Verify the correct logo is uploaded for mobile or use SVG.",
          highlightArea: { x: 10, y: 10, width: 100, height: 40 }
        }
      ]
    },
    content: {
      color: "#2F80ED",
      bugs: [
        {
          title: "Search placeholder text unclear",
          priority: "Medium",
          description: "Users may not understand how to effectively use the search functionality.",
          treatment: "Update placeholder text to be more descriptive and add search tips.",
          highlightArea: { x: 50, y: 100, width: 200, height: 40 }
        }
      ]
    }
  },
  // Screen 2: Filter Results
  {
    usability: {
      color: "#BB6BD9",
      bugs: [
        {
          title: "Browsing Content Visibility",
          priority: "Low",
          description: "The mobile keyboard obscures most of the stock screener list when the search bar is activated. This limits discoverability of browsing options.",
          treatment: "Reduce the initial number of visible screeners, and utilize clear visual cues (e.g., partial view of a next item or a scroll indicator) to indicate more options are available below. Alternatively, minimize the keyboard UI screen real estate to maximize view of screen.",
          highlightArea: { x: 120, y: 200, width: 80, height: 40 }
        }
      ]
    },
    content: {
      color: "#2F80ED",
      bugs: [
        {
          title: "Stock screeners",
          priority: "Medium",
          description: "Based on the screenshot, the stock screeners available ('Daily price jumps,' 'Daily price dips,' 'Upcoming earnings') are somewhat useful, but they are quite basic for my needs as an experienced professional.",
          treatment: "Additional Queries Macy would Find Useful:\n- Implement advanced screeners for financial ratios and valuation benchmarks\n- Add growth-based screeners for earnings and revenue analysis",
          highlightArea: { x: 150, y: 150, width: 100, height: 30 }
        }
      ]
    }
  },
  // Screen 3: View Details
  {
    visual: {
      color: "#F2C94C",
      bugs: [
        {
          title: "Image resolution issues",
          priority: "High",
          description: "NFT images are not displaying in high resolution on the details page.",
          treatment: "Implement proper image optimization and loading strategies.",
          highlightArea: { x: 80, y: 120, width: 160, height: 160 }
        }
      ]
    },
    localization: {
      color: "#00A99D",
      bugs: [
        {
          title: "Price format inconsistent",
          priority: "Medium",
          description: "Currency formatting varies across different regions.",
          treatment: "Implement consistent currency formatting based on user's locale.",
          highlightArea: { x: 200, y: 300, width: 100, height: 30 }
        }
      ]
    }
  }
];