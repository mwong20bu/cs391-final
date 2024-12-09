// Functional component to display information about the application
const About = () => {
  return (
    // Main container with inline styling for padding and text alignment
    <div style={{ padding: "20px", textAlign: "left" }}>
      {/* Title for the page */}
      <h1>About</h1>

      {/* Description of the Magic: The Gathering API */}
      <p>
        The Magic: The Gathering API is used to fetch data about cards and sets
        from the Magic: The Gathering universe. The data is accessed via HTTPS
        from the API endpoint:
      </p>

      {/* List of useful API links */}
      <ul>
        {/* Link to the API documentation */}
        <li>
          <a
            href="https://docs.magicthegathering.io/"
            target="_blank" // Opens link in a new tab
            rel="noopener noreferrer" // Prevents security risks
            style={{ color: "blue", textDecoration: "underline" }} // Link styling
          >
            Magic: The Gathering API Documentation
          </a>
        </li>

        {/* Link to the Cards Endpoint */}
        <li>
          <a
            href="https://api.magicthegathering.io/v1/cards"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Cards Endpoint
          </a>
        </li>
      </ul>

      {/* Section describing API parameters */}
      <h3>Parameters and Descriptions</h3>
      <ul>
        {/* Explanation of the 'name' parameter */}
        <li>
          <strong>name</strong>: The card name. For split, double-faced, and flip
          cards, just the name of one side of the card. Each "sub-card" has its
          own record.
        </li>
        {/* Explanation of the 'imageUrl' parameter */}
        <li>
          <strong>imageUrl</strong>: The URL to an image of the card. Only exists 
          if the card has a multiverse id.
        </li>
        {/* Explanation of the 'cmc' parameter */}
        <li>
          <strong>cmc</strong>: Converted mana cost. Always a number.
        </li>
        {/* Explanation of the 'power' parameter */}
        <li>
          <strong>power</strong>: The power of the card. Only present for
          creatures. This is a string, not an integer, because some cards have
          powers like "1+*".
        </li>
        {/* Explanation of the 'toughness' parameter */}
        <li>
          <strong>toughness</strong>: The toughness of the card. Only present
          for creatures. This is a string, not an integer, because some cards
          have toughness like "1+*".
        </li>
        {/* Explanation of the 'number' parameter */}
        <li>
          <strong>number</strong>: The card number. This is printed at the
          bottom-center of the card in small text. This is a string, not an
          integer, because some cards have letters in their numbers.
        </li>
      </ul>

      {/* Section highlighting the development team */}
      <h2>Our Team</h2>
      <ul style={{ listStyle: "none", padding: 0 }}> {/* Remove default bullet points */}
        <li>👩‍💻 Gwen Stewart - MagicCard.tsx</li>
        <li>👩‍💻 Madeleine Wong - MagicCardChild.tsx</li>
        <li>👩‍💻 Tiffany Chen - Header.tsx, About.tsx</li>
      </ul>
    </div>
  );
};

// Export the About component as the default export
export default About;