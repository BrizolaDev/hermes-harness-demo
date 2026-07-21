import type { MiddlewareHandler } from 'hono'
import { AppError } from '../domain/errors.js'

export function errorHandler(): MiddlewareHandler {
  return async (c, next) => {
    try {
      await next()
    } catch (error) {
      if (error instanceof AppError) {
        return c.json(
          { error: { code: error.code, message: error.message } },
          error.statusCode,
        )
      }

      console.error('Unhandled error:', error)
      return c.json(
        { error: { code: 'INTERNAL_ERROR', message: 'An unexpected error occurred' } },
        500,
      )
    }
  }
}