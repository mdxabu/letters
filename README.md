# Letters - A Safe Space for Your Thoughts

A minimal, privacy-first web application where anyone can anonymously express their thoughts and receive a warm, compassionate letter in return.

## About

Many people experience emotional stress, intrusive thoughts, or moments of deep loneliness, yet hesitate to share their feelings due to fear of judgment, lack of privacy, or the burden of explaining themselves. Letters provides a safe, anonymous space where you can express what's on your mind and receive a comforting response.

### Key Features

- **Complete Privacy**: No accounts, no sign-ups, no data storage
- **Anonymous**: Share your thoughts without revealing your identity
- **Compassionate Response**: Receive one of 50 handcrafted letters from "Someone who believes you matter"
- **No Permanence**: Your input is deleted immediately - nothing is saved or logged
- **Beautiful Design**: Clean, elegant white theme with calming typography
- **Single Page**: Simple, focused experience without distractions

## How It Works

1. Visit the website
2. Share your thoughts in the text area
3. Submit your message
4. Receive a randomly selected compassionate letter
5. Your input is automatically deleted - no trace remains



## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mdxabu/letters.git
cd letters
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```


## Important Notes

### This is NOT Professional Help

This application is designed to provide comfort and emotional support through compassionate words. It is **NOT** a replacement for professional mental health care. 

## Customization

### Adding More Letters

Edit `data/letters.json` to add, remove, or modify letters. Each letter should follow this format, and raise a PR with feel-good letters.

```json
{
  "id": 1,
  "content": "Dear Unknown,\n\nYour letter content here...\n\nWith care,\nSomeone who believes you matter"
}
```



## License

This project is open source and available for anyone who wants to create a safe space for emotional expression.

This project is Unlicensed.

## Credits

Created with compassion for anyone who needs a moment of understanding and kindness.

---

**Remember**: You matter. Your feelings are valid. You deserve compassion and support.