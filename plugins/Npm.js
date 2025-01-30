const { cmd } = require('../command');
// Thenux-ai
cmd({
    pattern: "npmguide",
    desc: "Guide for creating an NPM package",
    alias: ["npmhelp", "packageguide"],
    category: "development",
    react: "📦",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, args, q, reply }) => {
    try {
        // Check language preference
        const language = q ? q.toLowerCase() : 'both';

        // English Guide
        const englishGuide = `
*🚀 NPM Package Creation Guide (English)*

*1. Project Setup*
\`\`\`bash
# Create project directory
mkdir my-npm-package
cd my-npm-package

# Initialize npm project
npm init -y
\`\`\`

*2. Create Package Structure*
\`\`\`
my-npm-package/
│
├── index.js
├── package.json
├── README.md
└── LICENSE
\`\`\`

*3. Write Package Code (index.js)*
\`\`\`javascript
// Simple function example
function greet(name) {
    return \`Hello, \${name}!\`;
}

module.exports = {
    greet
};
\`\`\`

*4. Configure package.json*
\`\`\`json
{
  "name": "your-package-name",
  "version": "1.0.0",
  "description": "Your package description",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["your", "package", "keywords"],
  "author": "Your Name",
  "license": "MIT"
}
\`\`\`

*5. Create README.md*
\`\`\`markdown
# Your Package Name

## Installation
\`npm install your-package-name\`

## Usage
\`\`\`javascript
const { greet } = require('your-package-name');
console.log(greet('World')); // Hello, World!
\`\`\`
\`\`\`

*6. Publish to NPM*
\`\`\`bash
# Login to NPM
npm login

# Publish package
npm publish
\`\`\`

*Additional Tips:*
- Use semantic versioning
- Write comprehensive documentation
- Create test cases
- Add a meaningful LICENSE
`;

        // Sinhala Guide
        const sinhalaGuide = `
*🚀 NPM පැකේජය සෑදීමේ මාර්ගෝපදේශය (සිංහල)*

*1. ව්‍යාපෘති සැකසුම*
\`\`\`bash
# ව්‍යාපෘති බහාලුම සාදන්න
mkdir my-npm-package
cd my-npm-package

# npm ව්‍යාපෘතිය ආරම්භ කරන්න
npm init -y
\`\`\`

*2. පැකේජ සංරචනය සාදන්න*
\`\`\`
my-npm-package/
│
├── index.js
├── package.json
├── README.md
└── LICENSE
\`\`\`

*3. පැකේජ කේතය ලියන්න (index.js)*
\`\`\`javascript
// සරල ශ්‍රිත උදාහරණයක්
function greet(name) {
    return \`හෙලෝ, \${name}!\`;
}

module.exports = {
    greet
};
\`\`\`

*4. package.json වින්‍යාස කරන්න*
\`\`\`json
{
  "name": "your-package-name",
  "version": "1.0.0",
  "description": "Your package description",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["your", "package", "keywords"],
  "author": "Your Name",
  "license": "MIT"
}
\`\`\`

*5. README.md සාදන්න*
\`\`\`markdown
# Your Package Name

## installation
\`npm install your-package-name\`

## භාවිතය
\`\`\`javascript
const { greet } = require('your-package-name');
console.log(greet('World')); // හෙලෝ, World!
\`\`\`
\`\`\`

*6. NPM වෙත publish කිරීම*
\`\`\`bash
# NPM වෙත login වන්න
npm login

# පැකේජය publish කරන්න
npm publish
\`\`\`

*අමතර tips:*
- සෙම්මැටික් නංවල්කරණය භාවිතා කරන්න
- සම්පූර්ණ documentation ලියන්න
- පරීක්ෂණ කේස් සාදන්න
- අර්ථවත් LICENSE එකක් එක් කරන්න
`;

        // Determine which guide to send
        let guideToSend = '';
        switch (language) {
            case 'en':
            case 'english':
                guideToSend = englishGuide;
                break;
            case 'si':
            case 'sinhala':
                guideToSend = sinhalaGuide;
                break;
            default:
                guideToSend = `
*NPM Package Creation Guide*

Choose language:
- .npmguide en (English)
- .npmguide si (Sinhala)

*භාෂාව තෝරන්න:*
- .npmguide en (ඉංග්‍රීසි)
- .npmguide si (සිංහල)
`;
        }

        // Send the guide
        await reply(guideToSend);

        // React to successful guide retrieval
        await conn.sendMessage(from, { 
            react: { 
                text: "📘", 
                key: mek.key 
            } 
        });

    } catch (error) {
        console.error("NPM Guide Error:", error);
        
        // React to error
        await conn.sendMessage(from, { 
            react: { 
                text: "❌", 
                key: mek.key 
            } 
        });
        
        // Send error message
        await reply(`
❌ Guide Retrieval Failed
🔍 Error: ${error.message}
📝 Please try again
`);
    }
});
