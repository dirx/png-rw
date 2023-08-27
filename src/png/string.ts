const textDecoder = new TextDecoder()

export function stringDecode (b: Uint8Array): string {
  return textDecoder.decode(b)
}

const textEncoder = new TextEncoder()

export function stringEncode (s: string): Uint8Array {
  return textEncoder.encode(s)
}
