import "server-only";

import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { cache } from "react";

interface Article {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: any;
  last_edited_by: any;
  cover: any;
  icon: any;
  parent: any;
  archived: boolean;
  properties: {
    Title: { title: Array<{ plain_text: string }> };
    Date: { date: { start: string } };
    Description: { rich_text: Array<{ text: { content: string } }> };
    Slug: { rich_text: Array<{ text: { content: string } }> };
  };
  url: string;
  public_url: any;
}

export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getPages = cache(async (): Promise<Article[]> => {
  try {
    if (!process.env.NOTION_DATABASE_ID) {
      throw new Error("NOTION_DATABASE_ID is not defined");
    }

    const response = await notionClient.databases.query({
      filter: {
        property: "Status",
        status: {
          equals: "Published",
        },
      },
      sorts: [
        {
          property: "Created time",
          direction: "descending",
        },
      ],
      database_id: process.env.NOTION_DATABASE_ID!,
    });

    console.log("Fetched Notion Pages:", response.results); // Debugging

    return response.results as Article[];
  } catch (error) {
    console.error("Error fetching Notion pages:", error);
    return []; // Prevent crashing
  }
});

export const getPageContent = cache(async (pageId: string) => {
  try {
    const res = await notionClient.blocks.children.list({ block_id: pageId });
    return res.results as BlockObjectResponse[];
  } catch (error) {
    console.error("Error fetching page content:", error);
    return [];
  }
});

export const getPageBySlug = cache(async (slug: string) => {
  try {
    if (!process.env.NOTION_DATABASE_ID) {
      throw new Error("NOTION_DATABASE_ID is not defined");
    }

    const res = await notionClient.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    });

    return res.results[0] as PageObjectResponse | undefined;
  } catch (error) {
    console.error("Error fetching page by slug:", error);
    return undefined;
  }
});
