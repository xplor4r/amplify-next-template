-- CreateTable
CREATE TABLE "expense" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "notes" TEXT,
    "price" TEXT NOT NULL DEFAULT '0',
    "paid_via" TEXT NOT NULL DEFAULT 'cash',
    "category" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" UUID NOT NULL,

    CONSTRAINT "expense_pkey" PRIMARY KEY ("id")
);
