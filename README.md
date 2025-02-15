# Next.js 15 Hydration Mismatch Bug

This repository demonstrates a hydration mismatch error in a Next.js 15 application. The error is caused by a delay in the API response used for data fetching within a `useEffect` hook.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/about`.
5. Observe the hydration mismatch error in the console.

## Solution

The solution involves using a suspense boundary with `Suspense` and `lazy` components or using React's `use`Transition to show a loading screen or a fallback content until the data is available. The solution file shows the implementation of this approach.

## Additional Notes
This is a common issue when dealing with data fetching in Next.js apps. Always consider the timing of API calls and implement proper loading states to prevent hydration mismatches. This example utilizes a simple API call delay but the issue can arise from more complex scenarios such as network issues or large datasets.