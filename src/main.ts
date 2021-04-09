import "https://deno.land/x/dotenv/load.ts"
import { Application } from "./deps.ts"
import { router as OrderRoutes } from "./routes/orders.ts"

const app = new Application()

app.use(OrderRoutes.routes())
app.use(OrderRoutes.allowedMethods())

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: http${secure ? "s" : ""}://${
      hostname ?? "localhost"
    }:${port}`
  )
})

await app.listen({ port: Number(Deno.env.get("PORT")) || 0 })
