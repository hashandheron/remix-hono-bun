import { Hono } from 'hono'

const app = new Hono()

// app.get('/', (c) => {
//  return c.text('Hello Hono!')
//})

//export default app

import * as build from "@remix-run/dev/server-build";
import { remix } from "remix-hono/handler";

app.use("*", remix({ build, mode: process.env.NODE_ENV }));

export default app
