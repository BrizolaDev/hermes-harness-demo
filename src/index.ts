import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.json({ name: 'demo-api', version: '0.1.0' }))

app.get('/health', (c) => c.json({ status: 'ok', timestamp: new Date().toISOString() }))

const port = parseInt(process.env.PORT || '3000', 10)
serve({ fetch: app.fetch, port }, (info) => {
  console.log(`Server running on http://localhost:${info.port}`)
})

export default app