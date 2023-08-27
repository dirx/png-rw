// based on https://www.w3.org/TR/PNG-CRCAppendix.html
const crcTable: number[] = []

export function crc32 (b: Uint8Array): number {
  if (crcTable.length === 0) {
    for (let n = 0; n < 256; n++) {
      let c = n
      for (let k = 0; k < 8; k++) {
        if ((c & 1) !== 0) {
          c = 0xedb88320 ^ (c >>> 1)
        } else {
          c >>>= 1
        }
      }
      crcTable[n] = c
    }
  }
  let crc = 0 ^ -1
  crc = b.reduce((crc, c) => (crc >>> 8) ^ crcTable[(crc ^ c) & 0xff], crc)
  return (crc ^ -1) >>> 0
}
