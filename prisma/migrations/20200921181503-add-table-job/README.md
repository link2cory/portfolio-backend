# Migration `20200921181503-add-table-job`

This migration has been generated by Cory Perkins at 9/21/2020, 11:15:03 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Job" (
"id" SERIAL,
"companyName" text   NOT NULL ,
"companyDescription" text   ,
"companyLogo" text   ,
"companyWebsite" text   ,
"title" text   ,
"startDate" timestamp(3)   ,
"endDate" timestamp(3)   ,
"profileId" integer   NOT NULL ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."Job" ADD FOREIGN KEY ("profileId")REFERENCES "public"."Bio"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200913015524-add-user..20200921181503-add-table-job
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -17,12 +17,26 @@
   email     String
   objective String
   github    String
   website   String?
+  jobs      Job[]
 }
 model User {
   id       Int     @default(autoincrement()) @id
   name     String?
   email    String  @unique
   password String
 }
+
+model Job {
+  id                 Int       @default(autoincrement()) @id
+  companyName        String
+  companyDescription String?
+  companyLogo        String?
+  companyWebsite     String?
+  title              String?
+  startDate          DateTime?
+  endDate            DateTime?
+  profile            Bio       @relation(fields: [profileId], references: [id])
+  profileId          Int
+}
```

