import { describe, it, expect } from 'vitest'

describe('App', () => {
  it('should be configured correctly', () => {
    expect(process.env.NODE_ENV).toBeDefined()
  })
})