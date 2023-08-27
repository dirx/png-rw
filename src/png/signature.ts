export const PNG_SIGNATURE = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])

export function isPNG (data: Uint8Array): boolean {
  return data.subarray(0, 8).every((c, i) => c === PNG_SIGNATURE[i])
}
