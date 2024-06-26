import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
    dev: true
  })

  it('Fetch Hub manifetst', async () => {
    const manifest = await $fetch('/api/_hub/manifest')
    expect(manifest).toMatchObject({
      storage: {
        database: false,
        kv: false,
        blob: false
      },
      features: {
        cache: false
      }
    })
  })
})
