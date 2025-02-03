-- CreateTable
CREATE TABLE "subscriptions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "notes" TEXT,
    "url" TEXT NOT NULL,
    "price" TEXT NOT NULL DEFAULT '0',
    "paid" TEXT NOT NULL,
    "notify" BOOLEAN NOT NULL DEFAULT false,
    "date" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" UUID NOT NULL,
    "active" BOOLEAN DEFAULT true,
    "cancelled_at" TEXT,

    CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("id")
);
