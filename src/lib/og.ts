// lib/og.ts
export function generateOgUrl(title: string, description: string) {
  const params = new URLSearchParams({ title, description })
  return `https://nsmail.vercel.app/api/og?${params.toString()}`
}
