# Install dependencies only when needed
# FROM node:16-alpine AS deps
# RUN apk add --no-cache libc6-compat
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN yarn install --frozen-lockfile

# # Rebuild the source code only when needed
# FROM node:19.3 AS runner

# WORKDIR /app

# COPY --from=deps /app/node_modules ./node_modules

# COPY . .

# #delete
# EXPOSE 3000

# ENV PORT 3000
# #
# CMD ["npm", "run","dev"]

####################################################
# Install dependencies only when needed
FROM node:19-alpine AS deps
RUN #apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN #yarn install --frozen-lockfile
RUN npm   install

# Rebuild the source code only when needed
FROM node:19-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN npm run  build

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]

# Production image, copy all the files and run next
#FROM node:19-alpine AS runner
#WORKDIR /app
#
#ENV NODE_ENV production
#
#RUN addgroup --system --gid 1001 bloggroup
#RUN adduser --system --uid 1001 bloguser
#
#COPY --from=builder /app/public ./public
#COPY --from=builder /app/package.json ./package.json
#
## Automatically leverage output traces to reduce image size
## https://nextjs.org/docs/advanced-features/output-file-tracing
## COPY --from=builder --chown=bloguser:bloggroup /app/.next/standalone ./
## COPY --from=builder --chown=bloguser:bloggroup /app/.next/static ./.next/static
#
#USER bloguser
#
#EXPOSE 3000
#
#ENV PORT 3000
#
#CMD ["npm", "start"]
