#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Get the directory where this package is installed
// When installed as a dependency, __dirname will be node_modules/@conductus-labs/baton-agents/scripts
// We need to go up to find the parent project root
const packageRoot = path.resolve(__dirname, '..');
const projectRoot = path.resolve(packageRoot, '../../..');

// Check if we're in a node_modules directory (actual install vs development)
const isInstalled = packageRoot.includes('node_modules');

if (!isInstalled) {
  console.log('Running in development mode, skipping postinstall');
  process.exit(0);
}

const batonDir = path.join(projectRoot, '.baton');

// Check if .baton folder exists
if (!fs.existsSync(batonDir)) {
  console.log('.baton folder not found. Skipping baton-agents sync.');
  process.exit(0);
}

console.log('Found .baton folder. Syncing agent and pattern definitions...');

// Create subdirectories if they don't exist
const agentsDir = path.join(batonDir, 'agents');
const patternsDir = path.join(batonDir, 'patterns');

if (!fs.existsSync(agentsDir)) {
  fs.mkdirSync(agentsDir, { recursive: true });
}

if (!fs.existsSync(patternsDir)) {
  fs.mkdirSync(patternsDir, { recursive: true });
}

// Copy agent files
const srcAgentsDir = path.join(packageRoot, 'src', 'agents');
const agentFiles = fs.readdirSync(srcAgentsDir);

for (const file of agentFiles) {
  const srcFile = path.join(srcAgentsDir, file);
  const destFile = path.join(agentsDir, file);
  fs.copyFileSync(srcFile, destFile);
}

console.log(`Synced ${agentFiles.length} agent definitions to .baton/agents`);

// Copy pattern files
const srcPatternsDir = path.join(packageRoot, 'src', 'patterns');
const patternFiles = fs.readdirSync(srcPatternsDir);

for (const file of patternFiles) {
  const srcFile = path.join(srcPatternsDir, file);
  const destFile = path.join(patternsDir, file);
  fs.copyFileSync(srcFile, destFile);
}

console.log(`Synced ${patternFiles.length} pattern definitions to .baton/patterns`);

// Merge inventory file
const srcInventoryPath = path.join(packageRoot, 'src', 'baton-inventory.yml');
const destInventoryPath = path.join(batonDir, 'baton-inventory.yml');

try {
  const srcInventory = yaml.load(fs.readFileSync(srcInventoryPath, 'utf8'));

  let mergedInventory = {};

  // Load existing inventory if it exists
  if (fs.existsSync(destInventoryPath)) {
    try {
      const existingInventory = yaml.load(fs.readFileSync(destInventoryPath, 'utf8')) || {};
      mergedInventory = existingInventory;
    } catch (e) {
      console.warn('Warning: Could not parse existing inventory.yml, creating new one');
    }
  }

  // Merge the inventories (source overwrites existing)
  mergedInventory = { ...mergedInventory, ...srcInventory };

  // Write merged inventory
  const yamlContent = yaml.dump(mergedInventory, { indent: 2, sortKeys: true });
  fs.writeFileSync(destInventoryPath, yamlContent);

  console.log('Successfully merged inventory.yml');
} catch (e) {
  console.error('Error merging inventory:', e.message);
}

console.log('baton-agents postinstall complete!');
