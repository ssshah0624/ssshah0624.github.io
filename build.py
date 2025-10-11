#!/usr/bin/env python3
"""
Build script to inline header and footer content into HTML files.
This solves the fetch() issue on GitHub Pages.
"""

import os
import re
from pathlib import Path
import glob

def read_file(filepath):
    """Read content from a file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(filepath, content):
    """Write content to a file."""
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def inline_includes(html_content, header_content, footer_content):
    """Replace the header and footer divs with actual content."""
    # Replace header div
    header_pattern = r'<div id="header">.*?</div>'
    html_content = re.sub(header_pattern, f'<div id="header">\n{header_content}\n</div>', 
                         html_content, flags=re.DOTALL)
    
    # Replace footer div
    footer_pattern = r'<div id="footer">.*?</div>'
    html_content = re.sub(footer_pattern, f'<div id="footer">\n{footer_content}\n</div>', 
                         html_content, flags=re.DOTALL)
    
    # Remove the fetch scripts
    fetch_script_pattern = r'<script>\s*document\.addEventListener\("DOMContentLoaded".*?</script>'
    html_content = re.sub(fetch_script_pattern, '', html_content, flags=re.DOTALL)
    
    return html_content

def main():
    """Main build process."""
    # Read header and footer content
    header_content = read_file('header.html').strip()
    footer_content = read_file('footer.html').strip()
    
    # Find all HTML files in the project (including subdirectories)
    html_files = []
    
    # Add root HTML files
    for f in os.listdir('.'):
        if f.endswith('.html') and f not in ['header.html', 'footer.html']:
            html_files.append(f)
    
    # Add HTML files from apps directory
    for app_dir in glob.glob('apps/*/*.html'):
        html_files.append(app_dir)
    
    # Add HTML files from legal directory
    for legal_dir in glob.glob('legal/*/*.html'):
        html_files.append(legal_dir)
    
    print(f"Processing {len(html_files)} HTML files...")
    
    for html_file in html_files:
        print(f"Processing {html_file}...")
        content = read_file(html_file)
        
        # Check if file uses the fetch() pattern
        if any(pattern in content for pattern in ['fetch("header.html")',
                                                 'fetch("footer.html")',
                                                 'fetch("/header.html")',
                                                 'fetch("/footer.html")']):
            # Inline the header and footer
            new_content = inline_includes(content, header_content, footer_content)
            write_file(html_file, new_content)
            print(f"  ✓ Inlined header and footer")
        else:
            print(f"  - Skipped (no fetch() calls found)")
    
    print("\nBuild complete!")
    print("\nNext steps:")
    print("1. Review the changes with: git diff")
    print("2. Commit the changes: git add . && git commit -m 'Inline header and footer for GitHub Pages'")
    print("3. Push to GitHub: git push")

if __name__ == "__main__":
    main()
