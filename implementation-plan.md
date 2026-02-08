# Hero Section Refinement Plan

## Goal Description
Refine the recently created `HeroSection` to achieve a more polished, modern, and mobile-optimized look. The goal is to strictly adhere to the user's request for "minimal but impactful" content, consistent ShadCN/UI styling, and smoother animations, while maintaining the structure of the old Angular implementation.

## User Review Required
> [!NOTE]
> No breaking changes. This is a visual and content refinement of the previously implemented `HeroSection`.

## Proposed Changes

### Components
#### [MODIFY] [HeroSection.tsx](file:///c:/oak-signal-organization/mjsamaha-portfolio-root/mjsamaha-portfolio/components/sections/HeroSection.tsx)
- **Layout & Spacing**:
    - Increase vertical padding (`py-24 md:py-32`) for a more "heroic" feel.
    - Adjust grid gap on mobile to ensure cards don't feel cramped (`gap-6` -> `gap-8`).
- **Typography & Content**:
    - **Streamline "About My Journey"**: Condense the 3 paragraphs into 2 tight paragraphs.
        - *Para 1*: Focus on student status, passion, and stacks (Java, Python, Web).
        - *Para 2*: Combine Naval Reservist discipline with the goal of seeking opportunities.
    - **Headings**: Use `tracking-tight` and consistent sizing with `SkillsSection` (though Hero should be larger).
- **Visuals & Animations**:
    - **Icons**: Ensure consistent stroke width (1.5px or 2px) for Lucide icons.
    - **Glassmorphism**: Refine the backdrop blur and border opacity for a subtle, cleaner look.
    - **Animations**: Add a subtle hover `y` lift (-5px) to the cards to make them feel interactive.
- **Mobile Optimization**:
    - Ensure the "Icons Row" (Web Dev, Photography) wraps gracefully on small screens or uses a scrollable flex container if preferred (wrapping is better for this amount of content).
    - Center alignment on mobile for the "About" card header to match the Hero Intro.

### Assets
- **Icons**: No new assets, but will refine usage of `Laptop`, `Camera`, `Rocket`.

## Verification Plan

### Manual Verification
- **Mobile View**: Check iPhone SE/12 width (375px/390px) to ensure no horizontal scroll and readable text.
- **Desktop View**: Verify the 2-column layout feels balanced with the condensed text.
- **Interactions**: Hover over cards to see the lift effect.
