/*
 * Copyright (c) 2014-2021 Bjoern Kimminich.
 * SPDX-License-Identifier: MIT
 */

try {
  await require('./lib/startup/validateDependencies')()
  const server = require('./server')
  server.start()
} catch (error) {
  console.error(error)
  process.exit(1)
}
