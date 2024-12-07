const About = () => {
    return (
      <div style={{ padding: "20px", textAlign: "left" }}>
        <h1>About</h1>
        <p>
        The Magic: The Gathering API is used to fetch data about cards and sets
        from the Magic: The Gathering universe. The data is accessed via HTTPS
        from the API endpoint:
      </p>
      <ul>
        <li>
          <a
            href="https://docs.magicthegathering.io/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Magic: The Gathering API Documentation
          </a>
        </li>
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
        <h3>Parameters and Descriptions</h3>
        <ul>
          <li>
            <strong>name</strong>: The card name. For split, double-faced, and flip
            cards, just the name of one side of the card. Each "sub-card" has its
            own record.
          </li>
          <li>
            <strong>cmc</strong>: Converted mana cost. Always a number.
          </li>
          <li>
            <strong>power</strong>: The power of the card. Only present for
            creatures. This is a string, not an integer, because some cards have
            powers like "1+*".
          </li>
          <li>
            <strong>toughness</strong>: The toughness of the card. Only present
            for creatures. This is a string, not an integer, because some cards
            have toughness like "1+*".
          </li>
          <li>
            <strong>number</strong>: The card number. This is printed at the
            bottom-center of the card in small text. This is a string, not an
            integer, because some cards have letters in their numbers.
          </li>
        </ul>
        <h2>Our Team</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>👩‍💻 Gwen Stewart - MagicCard.tsx</li>
          <li>👩‍💻 Madeleine Wong - MagicCardChild.tsx</li>
          <li>👩‍💻 Tiffany Chen - Header.tsx, About.tsx</li>
        </ul>
      </div>
    );
  };
  
  export default About;