export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-17'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skf2kgAl86cK6ho6WMNZwnT2rjmFtOzIPsufojgnMczCojyTzs9JaPMTIQKBiG7ztXk22YNubaRAgC7p5TAELLfKYo2tO4YuOJFeFuNFQ0OGMfo07izJ3FHqIN39CvKh04PS7BULqXyKzrF5ycSQoxe6gq7cODiwpyOclwbWxOSXxsSuR5TQ",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
