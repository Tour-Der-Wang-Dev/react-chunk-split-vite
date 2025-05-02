
# Project Files Explained 📁

This document provides a quick overview of all files in the project with a brief description and importance indicator.

## Importance Legend
- 🔴 Critical core file
- 🟠 Important configuration
- 🟡 Significant component/utility
- 🟢 Standard component/page
- 🔵 Helper/utility file
- ⚪ Optional/supplementary file

## Root Files

- `index.html` 🔴 - Main HTML entry point that loads the React application
- `vite.config.ts` 🔴 - Vite configuration with performance optimizations
- `tailwind.config.ts` 🟠 - Tailwind CSS configuration with theme customization
- `postcss.config.js` 🟠 - PostCSS configuration for Tailwind processing
- `tsconfig.json` 🟠 - TypeScript compiler configuration for the project
- `tsconfig.node.json` 🟠 - TypeScript configuration for Node.js environment
- `tsconfig.app.json` 🟠 - TypeScript configuration specific to the app
- `README.md` ⚪ - Project documentation and overview

## Source Files

### Core Application
- `src/main.tsx` 🔴 - Application entry point that renders React app
- `src/App.tsx` 🔴 - Root React component with routing and providers
- `src/index.css` 🟠 - Global CSS styles and Tailwind imports

### Pages
- `src/pages/Home.tsx` 🟢 - Home page component
- `src/pages/About.tsx` 🟢 - About page with project information
- `src/pages/NotFound.tsx` 🟢 - 404 error page
- `src/pages/Index.tsx` 🟢 - Index page component (fallback/placeholder)

### Components
- `src/components/LoadingSpinner.tsx` 🟢 - Loading indicator component

### UI Components

- `src/components/ui/accordion.tsx` 🟢 - Collapsible content component
- `src/components/ui/alert-dialog.tsx` 🟢 - Modal dialog for alerts
- `src/components/ui/alert.tsx` 🟢 - Alert message component
- `src/components/ui/aspect-ratio.tsx` 🟢 - Maintains aspect ratio for content
- `src/components/ui/avatar.tsx` 🟢 - User avatar component
- `src/components/ui/badge.tsx` 🟢 - Small status indicator component
- `src/components/ui/breadcrumb.tsx` 🟢 - Navigation breadcrumb component
- `src/components/ui/button.tsx` 🟡 - Button component with variants
- `src/components/ui/calendar.tsx` 🟢 - Date picker calendar
- `src/components/ui/card.tsx` 🟢 - Content container component
- `src/components/ui/carousel.tsx` 🟢 - Slideshow component
- `src/components/ui/chart.tsx` 🟢 - Data visualization component
- `src/components/ui/checkbox.tsx` 🟢 - Checkbox input component
- `src/components/ui/collapsible.tsx` 🟢 - Expandable/collapsible content
- `src/components/ui/command.tsx` 🟢 - Command palette component
- `src/components/ui/context-menu.tsx` 🟢 - Right-click menu component
- `src/components/ui/dialog.tsx` 🟢 - Modal dialog component
- `src/components/ui/drawer.tsx` 🟢 - Slide-out drawer component
- `src/components/ui/dropdown-menu.tsx` 🟢 - Dropdown menu component
- `src/components/ui/form.tsx` 🟡 - Form component with validation integration
- `src/components/ui/hover-card.tsx` 🟢 - Card shown on hover
- `src/components/ui/input-otp.tsx` 🟢 - One-time password input component
- `src/components/ui/input.tsx` 🟡 - Text input component
- `src/components/ui/label.tsx` 🟢 - Accessible label component
- `src/components/ui/menubar.tsx` 🟢 - Horizontal menu component
- `src/components/ui/navigation-menu.tsx` 🟢 - Navigation menu component
- `src/components/ui/pagination.tsx` 🟢 - Pagination controls component
- `src/components/ui/popover.tsx` 🟢 - Popup content component
- `src/components/ui/progress.tsx` 🟢 - Progress indicator component
- `src/components/ui/radio-group.tsx` 🟢 - Radio button group component
- `src/components/ui/resizable.tsx` 🟢 - Resizable panel component
- `src/components/ui/scroll-area.tsx` 🟢 - Custom scrollable area component
- `src/components/ui/select.tsx` 🟢 - Dropdown select component
- `src/components/ui/separator.tsx` 🟢 - Visual divider component
- `src/components/ui/sheet.tsx` 🟢 - Slide-in panel component
- `src/components/ui/sidebar.tsx` 🟢 - Application sidebar component
- `src/components/ui/skeleton.tsx` 🟢 - Loading placeholder component
- `src/components/ui/slider.tsx` 🟢 - Range slider component
- `src/components/ui/sonner.tsx` 🟢 - Toast notification wrapper
- `src/components/ui/switch.tsx` 🟢 - Toggle switch component
- `src/components/ui/table.tsx` 🟢 - Data table component
- `src/components/ui/tabs.tsx` 🟢 - Tabbed interface component
- `src/components/ui/textarea.tsx` 🟢 - Multiline text input component
- `src/components/ui/toast.tsx` 🟢 - Toast notification component
- `src/components/ui/toaster.tsx` 🟡 - Toast notification container
- `src/components/ui/toggle-group.tsx` 🟢 - Group of toggle buttons
- `src/components/ui/toggle.tsx` 🟢 - Toggle button component
- `src/components/ui/tooltip.tsx` 🟢 - Tooltip component
- `src/components/ui/use-toast.ts` 🟡 - Toast notification hook

### Utilities and Hooks
- `src/lib/utils.ts` 🟡 - Utility functions used throughout the application
- `src/hooks/use-mobile.tsx` 🔵 - Hook for detecting mobile devices
- `src/hooks/use-toast.ts` 🔵 - Hook for managing toast notifications

### Configuration/Environment
- `src/vite-env.d.ts` 🟠 - Type declarations for Vite environment

## GitHub Workflow Files
- `.github/workflows/datadog-synthetics.yml` 🔵 - Datadog synthetic testing workflow
- `.github/workflows/generator-generic-ossf-slsa3-publish.yml` 🔵 - SLSA security workflow
