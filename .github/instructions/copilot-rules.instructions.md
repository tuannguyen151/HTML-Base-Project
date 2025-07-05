---
description: How to add or edit Copilot rules in our project
---

# Copilot Rules Location
How to add new copilot rules to the project

1. Always place rule files in PROJECT_ROOT/.github/instructions/:
```
.github/instructions/
├── your-rule-name.instructions.md
├── another-rule.instructions.md
└── ...
```

2. Follow the naming convention:
- Use kebab-case for filenames
- Always use .instructions.md extension
- Make names descriptive of the rule's purpose

3. Directory structure:
```
PROJECT_ROOT/
├── .github/
│ └── instructions/
│ ├── your-rule-name.instructions.md
│ └── ...
└── ...
```

4. Never place rule files:
- In the project root
- In subdirectories outside .github/instructions
- In any other location

5. Copilot rules have the following structure:
```
---
description: "Short description of the rule's purpose"
applyTo: "optional/path/pattern/**/*"
---
# Rule Title
Main content explaining the rule with markdown formatting.

1. Step-by-step instructions
2. Code examples
3. Guidelines

Example:
```typescript
// Good example
function goodExample() {
// Implementation following guidelines
}

// Bad example
function badExample() {
// Implementation not following guidelines
}
```
