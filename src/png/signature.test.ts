import { describe, expect, test } from 'vitest'
import { isPNG } from './signature.ts'
import { readFileSync } from 'fs'

const referenceImage = readFileSync(process.cwd() + '/resources/png-rw-reference.png')
const referenceImageData = new Uint8Array(referenceImage)

describe('isPNG', () => {
  test('with reference image data should succeed', () => {
    expect(isPNG(referenceImageData)).toBeTruthy()
  })

  test('with invalid image data should fail', () => {
    expect(isPNG(new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))).toBeFalsy()
  })
})
