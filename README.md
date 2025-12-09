# @conductus-labs/baton-agents

[![npm version](https://img.shields.io/npm/v/@conductus-labs/baton-agents)](https://www.npmjs.com/package/@conductus-labs/baton-agents)
[![npm downloads](https://img.shields.io/npm/dm/@conductus-labs/baton-agents)](https://www.npmjs.com/package/@conductus-labs/baton-agents)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Baton Framework Agent and Cognitive Pattern Definitions

A comprehensive collection of AI agent definitions and cognitive thinking patterns designed for the Baton Framework. This package provides pre-configured agent roles and cognitive patterns that can be used to build sophisticated AI-powered applications.

## Features

- **24 Specialized Agent Definitions**: Pre-configured markdown templates for various professional roles
- **19 Cognitive Patterns**: YAML-based thinking patterns for different problem-solving approaches
- **Baton Framework Integration**: Automatic syncing to `.baton` folder for seamless integration
- **Zero Configuration**: Works out of the box with Baton Framework projects
- **TypeScript-Ready**: Fully typed definitions for seamless integration

## Installation

```bash
npm install @conductus-labs/baton-agents
```

## Baton Framework Integration

When installed in a project with a `.baton` folder, this package automatically:

1. **Syncs agent definitions** to `.baton/agents/`
2. **Syncs cognitive patterns** to `.baton/patterns/`
3. **Merges inventory** into `.baton/baton-inventory.yml`

This happens automatically on `npm install` - no additional configuration needed!

### Manual Usage (Without Baton Framework)

You can also import individual agents and patterns directly:

```javascript
// Import agent definitions
import backendAgent from '@conductus-labs/baton-agents/agents/backend-engineer-agent.md';
import frontendAgent from '@conductus-labs/baton-agents/agents/frontend-engineer-agent.md';

// Import cognitive patterns
import designThinking from '@conductus-labs/baton-agents/patterns/design-thinking.yml';
import criticalThinking from '@conductus-labs/baton-agents/patterns/critical-thinking.yml';

// Import the inventory
import inventory from '@conductus-labs/baton-agents/inventory';
```

## Available Agents

### Engineering & Technical

- **Backend Engineer Agent** - Backend engineering specialist
- **Frontend Engineer Agent** - Frontend engineering specialist
- **DevOps Engineer Agent** - DevOps engineering specialist
- **Database Engineer Agent** - Database engineering specialist
- **CLI Engineer Agent** - CLI engineering specialist
- **Data Science Engineer Agent** - Data science engineering specialist
- **Security Engineer Agent** - Security engineering specialist
- **Software Architect Agent** - Software architecture specialist

### Quality & Testing

- **Automated Test Engineer Agent** - Automated testing specialist
- **Code Review Agent** - Code review and quality assurance specialist
- **Quality Assurance Agent** - QA and testing specialist

### Design & UX

- **UI/UX Design Agent** - UI/UX design specialist
- **Workflow Designer Agent** - Workflow design specialist

### Content & Documentation

- **Technical Writer Agent** - Technical documentation specialist
- **Content Strategist Agent** - Content strategy specialist
- **SEO Expert Agent** - Search engine optimization specialist
- **Marketing Expert Agent** - Marketing strategy specialist

### Business & Management

- **Project Manager Agent** - Project management specialist
- **Business Analyst Agent** - Strategic business analyst and requirements expert
- **Business Advisor Agent** - Strategic business advisor and executive consultant
- **Research Assistant Agent** - Research and analysis specialist

### Framework Specialists

- **Baton Agent** - Baton Framework specialist and agent designer
- **Knowledge Designer Agent** - Knowledge architecture specialist
- **Rhythm Expert Agent** - Rhythm and workflow optimization specialist

## Available Cognitive Patterns

### Strategic Patterns

- **Strategic Thinking** - Long-term planning and decision making
- **Systems Thinking** - Understanding interconnected systems
- **Design Thinking** - User-centered problem solving
- **Critical Thinking** - Logical analysis and evaluation

### Adaptive Patterns

- **Adaptive Thinking** - Flexibility and context awareness
- **Agile Thinking** - Iterative and responsive approaches
- **Lean Thinking** - Efficiency and waste reduction
- **Experimental Thinking** - Hypothesis-driven exploration

### Analytical Patterns

- **Analytical Thinking** - Data-driven analysis
- **Computational Thinking** - Algorithmic problem solving
- **Meta-Cognitive** - Thinking about thinking

### Collaborative Patterns

- **Collaborative Thinking** - Team-based problem solving
- **Empathetic Thinking** - Understanding others' perspectives
- **Ethical Thinking** - Moral and ethical considerations

### Creative Patterns

- **Creative Problem Solving** - Innovative solution generation
- **Lateral Thinking** - Non-linear creative approaches

### Growth Patterns

- **Growth Mindset** - Learning and development focus
- **Resilience Thinking** - Adaptability and recovery
- **Systematic Approach** - Structured problem solving

## Development

### Prerequisites

- Node.js >= 18.0.0
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/Conductus-Labs/baton-agents.git
cd baton-agents

# Install dependencies
npm install
```

### Available Scripts

```bash
# Linting
npm run lint:yaml       # Lint YAML files
npm run lint:markdown   # Lint markdown files
npm run lint:all        # Run all linters

# Package Management
npm run package         # Create tarball in dist/
npm run clean           # Remove node_modules and package-lock.json
```

### Project Structure

```
baton-agents/
├── src/
│   ├── agents/              # Agent definition markdown files
│   ├── patterns/            # Cognitive pattern YAML files
│   └── baton-inventory.yml  # Package inventory
├── scripts/
│   └── postinstall.cjs      # Post-install sync script
├── .github/
│   └── workflows/           # CI/CD workflows
├── package.json
└── README.md
```

## Contributing

We welcome contributions! Please follow these guidelines:

1. **Fork the repository** and create a feature branch
2. **Run linters** before committing: `npm run lint:all`
3. **Follow existing patterns** for agents and cognitive patterns
4. **Submit a PR** with a clear description of your changes

### Adding New Agents

1. Create a markdown file in `src/agents/` following existing templates
2. Add entry to `src/baton-inventory.yml`
3. Run `npm run lint:markdown` to validate

### Adding New Patterns

1. Create a YAML file in `src/patterns/` following existing structure
2. Run `npm run lint:yaml` to validate

## Release Process

This package uses trunk-based development with automated versioning and publishing:

### Creating a Release

1. **Run Version Management Workflow**:
   - Go to Actions → Version Management → Run workflow
   - Select version type: `patch`, `minor`, or `major`
   - This creates a PR with the version bump

2. **PR Workflow**:
   - PR validation runs automatically (linting + dev package publish)
   - Dev package published to GitHub Packages for testing: `@conductus-labs/baton-agents@X.X.X-pr.N.abc1234`
   - Review and merge the PR

3. **Automatic Publishing** (on merge to main):
   - Git tag created: `vX.X.X`
   - Package published to npm with provenance
   - GitHub Release created automatically

### Workflows

- **pr-validation.yml** - Runs linting and publishes dev packages to GitHub Packages
- **publish-packages.yml** - Publishes stable releases to npm when version is bumped on main
- **version-management.yml** - Creates version bump PRs

## License

MIT © Conductus Labs Ltd

## Links

- **Repository**: https://github.com/Conductus-Labs/baton-agents
- **Issues**: https://github.com/Conductus-Labs/baton-agents/issues
- **Conductus Labs**: https://www.conductuslabs.com

## Support

For questions and support:

- Open an issue on GitHub
- Check existing agent and pattern definitions for examples
- Review the Baton Framework documentation
